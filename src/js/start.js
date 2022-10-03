import { requestData, requestTypes, getServerData } from './fetchUrl.js';

import { spinnerOn, spinnerOff } from './spinner';
import { fillGenresFiltr } from './filter';
// import { makePagination, makePaginationBtn } from './pagination';
import { restoreConfig } from './restore';

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
  .then(() => restoreConfig());
// .then(() => {
//   console.log('total pages', requestData.movies.total_pages);
//   makePaginationBtn(requestData.movies.total_pages);
//   makePagination(requestData.movies.total_pages, 20);
// });
