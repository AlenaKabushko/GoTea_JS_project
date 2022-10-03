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
  }
}

export function restoreConfig() {
  let config = load(nameConfig);
  if (config) {
    requestData.page = config.requestData.page;
    requestData.request = config.requestData.request;
    requestData.discover = config.requestData.discover;
    requestData.id = config.requestData.id;
    requestData.search = config.requestData.search;
    requestData.movies = config.requestData.movies;
    requestData.genres = config.requestData.genres;
    requestData.movie = config.requestData.movie;
    requestData.videos = config.requestData.videos;

    getNextServerData().then(movies => {
      return renderMoviesMarkup(movies);
    });
  } else {
    console.log(false);
    requestData.page = 1;
    return getServerData(requestTypes.TRENDING).then(movies => {
      requestData.movies = movies;
      saveConfig();
      renderMoviesMarkup(movies);
    });
  }
}
