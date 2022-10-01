import {
  requestData,
  requestTypes,
  getServerData,
  renderMoviesMarkup,
} from './fetchUrl.js';

import { spinnerOn, spinnerOff } from './spinner';
import { fillGenresFiltr } from './filter';
import { makePagination, makePaginationBtn } from './pagination';

//-----------------------------------------------------------------------
//на старте:

//запрос массива соответствия номера жанра и названия
getServerData(requestTypes.GENRE)
  .then(data => {
    //сохраним его в глобальной переменной
    requestData.genres = data.genres;
    fillGenresFiltr('filter-genres');
    return true;
  })
  .then(() => {
    requestData.page = 1;
    getServerData(requestTypes.TRENDING)
      .then(movies => {
        renderMoviesMarkup(movies);
      })
      .then(() => {
        console.log(requestData.movies.total_pages);
        makePaginationBtn(requestData.movies.total_pages);
        makePagination(requestData.movies.total_pages, 20);
      });
  });
