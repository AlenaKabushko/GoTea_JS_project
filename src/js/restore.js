import {
  requestData,
  requestTypes,
  getServerData,
  getNextServerData,
  renderMoviesMarkup,
} from './fetchUrl.js';
import { getMultiOption, getOption, setOption } from './select.js';
import { save, load } from './localstorage';
import { makePagination, makePaginationBtn } from './pagination';

const nameConfig = 'config';
const nameLibrary = 'library';
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
  let library = load(nameLibrary);
  let config = load(nameConfig);
  save(nameLibrary, '0');
  if (library !== undefined && library === '1' && config) {
    requestData.page = config.requestData.page;
    requestData.request = config.requestData.request;
    requestData.discover = config.requestData.discover;
    requestData.id = config.requestData.id;
    requestData.search = config.requestData.search;
    requestData.movies = config.requestData.movies;
    requestData.genres = config.requestData.genres;
    requestData.movie = config.requestData.movie;
    requestData.videos = config.requestData.videos;
    setOption(classYears, config.requestData.idxYears);
    console.log(config.requestData.valuesGenres);
    getNextServerData().then(movies => {
      return renderMoviesMarkup(movies);
    });
    // .then(() => {
    // console.log('total pages', requestData.movies.total_pages);
    // makePaginationBtn(requestData.movies.total_pages);
    // makePagination(requestData.movies.total_pages, 20);
    // });
  } else {
    requestData.page = 1;
    return getServerData(requestTypes.TRENDING).then(movies => {
      requestData.movies = movies;
      saveConfig();
      renderMoviesMarkup(movies);
    });
    // .then(() => {
    // console.log('total pages', requestData.movies.total_pages);
    // makePaginationBtn(requestData.movies.total_pages);
    // makePagination(requestData.movies.total_pages, 20);
    // });
  }
}

const libraryBtn = document.querySelector('.header__navigation-link');
libraryBtn.addEventListener('click', function (e) {
  save(nameLibrary, '1');
});
