import {
  requestData,
  requestTypes,
  getServerData,
  getNextServerData,
  renderMoviesMarkup,
} from './fetchUrl';

import {
  createCustomOneSelect,
  setOption,
  getOption,
  getOptionNum,
  createCustomMultiSelect,
  getMultiOption,
  setMultiOption,
} from './select.js';

import { classGenres, classYears } from './restore';

import { PaginationInstnce } from '../index';

export function fillGenresFiltr(classSelect) {
  const markup = markupFilterGenres();
  const select = document.querySelector(`.custom-multi-select.${classSelect}`);
  select.innerHTML = markup;
  createCustomMultiSelect();
  createCustomOneSelect();
}

function markupFilterGenres() {
  let markup =
    '<select><option value="Genres">Genres</option><option value="None">None</option>';
  markup += requestData.genres
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
  markup += '</select>';
  return markup;
}

const filterBtnUse = document.querySelector('.filter-btn-use');
filterBtnUse.addEventListener('click', function (e) {
  requestData.idxYears = getOptionNum('filter-years');
  const filterYears = getOption('filter-years');
  requestData.valuesGenres = getMultiOption('filter-genres');
  requestData.page = 1;
  requestData.discover = '';
  if (requestData.valuesGenres.length) {
    requestData.discover = `&with_genres=${requestData.valuesGenres}`;
  }
  requestData.discover += filterYears;
  if (requestData.discover) {
    getServerData(requestTypes.DISCOVER)
      .then(movies => {
        PaginationInstnce.currentPage = 1;
        PaginationInstnce.setTotalPages(Math.min(500, movies.total_pages));
        renderMoviesMarkup(movies);
      })
      .catch(error => setErrorMessage(error.message));
  } else {
    getServerData(requestTypes.TRENDING)
      .then(movies => {
        PaginationInstnce.currentPage = 1;
        PaginationInstnce.setTotalPages(Math.min(500, movies.total_pages));
        renderMoviesMarkup(movies);
      })
      .catch(error => setErrorMessage(error.message));
  }
});

const filterBtnReset = document.querySelector('.filter-btn-reset');
filterBtnReset.addEventListener('click', function (e) {
  setOption(classYears, 0);
  setMultiOption(classGenres, '');
  requestTypes.page = 1;
  getServerData(requestTypes.TRENDING)
    .then(movies => {
      PaginationInstnce.currentPage = 1;
      PaginationInstnce.setTotalPages(Math.min(500, movies.total_pages));
      renderMoviesMarkup(movies);
    })
    .catch(error => setErrorMessage(error.message));
});

const filterNavBtn = document.querySelector(
  '.header__navigation-button-filter'
);
filterNavBtn.addEventListener('click', function (e) {
  const filterContainer = document.querySelector('.filter__container');
  filterContainer.classList.toggle('visually-hidden');
});
