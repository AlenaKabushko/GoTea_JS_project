import {
  requestData,
  requestTypes,
  getServerData,
  getNextServerData,
  renderMoviesMarkup,
} from './fetchUrl.js';
import { getMultiOption } from './select.js';
import { save, load } from './localstorage';
import { makePagination, makePaginationBtn } from './pagination';

const nameConfig = 'config';
const classGenres = 'filter-genres';
const classYears = 'filter-years';

// let config = {
//   requestData: {},
//   genres: '',
//   years: '',
//   filterOn: 0,
// };

export function saveConfig() {
  const selectorYears = document.querySelector(`.custom-select.${classYears}`);
  if (selectorYears !== null) {
    let config = {};
    config.requestData = requestData;
    config.genres = getMultiOption(classGenres);
    config.years = selectorYears.querySelector('.select-selected').textContent;
    save(nameConfig, config);
    console.log('save', config);
  }
}

export function restoreConfig() {
  let config = load(nameConfig);
  console.log('load', config);
  if (config) {
    console.log(true);
    requestData = config.requestData;
    console.log('load config', config);
    console.log('load config.requestData', config.requestData);
    console.log('requestData', requestData);
    const r = config.requestData;
    console.log('r', r);

    getNextServerData()
      .then(movies => {
        return renderMoviesMarkup(movies);
      })
      .then(() => {
        console.log('total pages', requestData.movies.total_pages);
        makePaginationBtn(requestData.movies.total_pages);
        makePagination(requestData.movies.total_pages, 20);
      });
  } else {
    console.log(false);
    requestData.page = 1;
    return getServerData(requestTypes.TRENDING)
      .then(movies => {
        requestData.movies = movies;
        saveConfig();
        renderMoviesMarkup(movies);
      })
      .then(() => {
        console.log('total pages', requestData.movies.total_pages);
        makePaginationBtn(requestData.movies.total_pages);
        makePagination(requestData.movies.total_pages, 20);
      });
  }
}
