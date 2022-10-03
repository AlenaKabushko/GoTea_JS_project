import {
  requestData,
  requestTypes,
  getServerData,
  renderMoviesMarkup,
  markupList,
} from './fetchUrl.js';
import { spinnerOn, spinnerOff } from './spinner';
import { fillGenresFiltr } from './filter';
import { PaginationInstnce } from '../index';

const searchBtn = document.querySelector('.header__form-button');
const searchInput = document.querySelector('.header__form-input');
const headerSearchError = document.querySelector('.header__text-warning');

searchBtn.addEventListener('click', onBtnSearcClick);

function onBtnSearcClick(e) {
  e.preventDefault();
  if (searchInput.value !== '' && searchInput.value !== ' ') {
    requestData.search = `${searchInput.value}`;
    requestData.page = 1;
    getServerData(requestTypes.SEARCH).then(movies => {
      PaginationInstnce.currentPage = 1;
      PaginationInstnce.setTotalPages(Math.min(500, movies.total_pages));

      renderMoviesMarkup(movies);
      searchInput.value = '';
    });
  }
}
