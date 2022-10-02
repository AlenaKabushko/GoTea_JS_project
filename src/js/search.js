import {
  requestData,
  requestTypes,
  getServerData,
  renderMoviesMarkup,
  markupList,
} from './fetchUrl.js';

import { spinnerOn, spinnerOff } from './spinner';
import { fillGenresFiltr } from './filter';
import { makePagination, makePaginationBtn } from './pagination';
// --------------------------
const searchBtn = document.querySelector('.header__form-button');
const searchInput = document.querySelector('.header__form-input');
const headerSearchError = document.querySelector('.header__text-warning');

searchBtn.addEventListener('click', e => {
  e.preventDefault();
  if (searchInput.value !== '' && searchInput.value !== ' ') {
    requestData.search = `${searchInput.value}`;
    requestData.page = 1;
    getServerData(requestTypes.SEARCH).then(movies => {
      renderMoviesMarkup(movies);
      searchInput.value = '';
      /* if (( )) {
        console.log('FUCK');
      } */
    });
  } else {
    return;
  }
});
/* console.log(markupList); */
