import {
  requestData,
  requestTypes,
  getServerData,
  getNextServerData,
  renderMoviesMarkup,
} from './fetchUrl';

import { spinnerOn, spinnerOff } from './spinner';
import { fillGenresFiltr } from './filter';
import { PaginationInstnce } from '../index';
import { setErrorMessage } from './errorMessage';

const searchBtn = document.querySelector('.header__form-button');
const searchInput = document.querySelector('.header__form-input');
const headerSearchError = document.querySelector('.header__text-warning');

searchBtn.addEventListener('click', onBtnSearcClick);

function onBtnSearcClick(e) {
  e.preventDefault();
  if (searchInput.value !== '' && searchInput.value !== ' ') {
    requestData.search = `${searchInput.value}`;
    requestData.page = 1;
    getServerData(requestTypes.SEARCH)
      .then(movies => {
        spinnerOn();
        PaginationInstnce.currentPage = 1;
        PaginationInstnce.setTotalPages(Math.min(500, movies.total_pages));

        renderMoviesMarkup(movies);
        searchInput.value = '';
      })
      .catch(error => setErrorMessage(error.message));
  }
}
