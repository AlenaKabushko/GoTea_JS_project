import {
  requestData,
  requestTypes,
  getServerData,
  renderMoviesMarkup,
} from './fetchUrl.js';

import { spinnerOn, spinnerOff } from './spinner';
import { fillGenresFiltr } from './filter';
import { makePagination, makePaginationBtn } from './pagination';
// --------------------------
const searchForm = document.querySelector('.header__form-block');
const searchInput = document.querySelector('.header__form-input');
/* const headerSearchError = document.querySelector('.visually-hidden'); */

searchForm.addEventListener('click', e => {
  e.preventDefault();
  requestData.search = `${searchInput.value}`;
  requestData.page = 1;
  getServerData(requestTypes.SEARCH).then(movies => {
    renderMoviesMarkup(movies);
    /*  if (requestData.search === []) {
      return headerSearchError;
    } */
    searchInput.value = '';
  });
});
