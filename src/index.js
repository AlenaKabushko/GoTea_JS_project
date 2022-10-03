import './js/fetchUrl';
import {
  requestData,
  requestTypes,
  getServerData,
  getNextServerData,
  renderMoviesMarkup,
} from './js/fetchUrl';
import './js/firebase';
import './js/start';
import './js/search';
import './js/select';
import './js/filter';
import { fillGenresFiltr } from './js/filter';
import './js/gallery-card-modal';
import { save, load } from './js/localstorage';
import './js/localstorage';
import './js/spinner';
import './js/modal-teem';
import './js/switcherTheme';
import './js/button-up';
import { Pagination } from './js/pagination';

const PaginationInstnce = new Pagination(
  document.getElementById('pagination'),
  {
    countPoint: 5,
    totalPages: 10,
    onShow: paginationOnClick,
  }
);

function paginationOnClick(pageNumber) {
  console.log(pageNumber);

  requestData.page = pageNumber;
  getNextServerData().then(movies => {
    renderMoviesMarkup(movies);
  });
}

getServerData(requestTypes.GENRE)
  .then(data => {
    requestData.genres = data.genres;
    fillGenresFiltr('filter-genres');
  })
  .then(() => {
    let config = load('config');
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

      PaginationInstnce.currentPage = requestData.page;
      getNextServerData().then(movies => {
        PaginationInstnce.setTotalPages(movies.total_pages);
        renderMoviesMarkup(movies);
      });
    } else {
      console.log(false);
      requestData.page = 1;
      getServerData(requestTypes.TRENDING).then(movies => {
        requestData.movies = movies;
        PaginationInstnce.setTotalPages(movies.total_pages);
        saveConfig();
        renderMoviesMarkup(movies);
      });
    }
  });
