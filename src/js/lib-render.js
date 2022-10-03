import { load, save, remove } from './localstorage';
import { setGalleryClickListeners } from './gallery-card-modal';
import { makePagination, makePaginationBtn } from './pagination';
import { setGalleryClickListeners } from './gallery-card-modal';

const libWatchedBtnEl = document.querySelector(
  '.header__library-button > .btn-watch'
);

const libQueueBtnEl = document.querySelector(
  '.header__library-button > .btn-queue'
);

const galleryEl = document.querySelector('.films-gallery');

libWatchedBtnEl.addEventListener('click', onlibWatchedBtnEl);
libQueueBtnEl.addEventListener('click', onlibQueueBtnEl);

function onlibWatchedBtnEl() {
  clear();
  changeWatchActiveBtn();
  let watched = load('watched');
  if (!watched) {
    return;
  }

  let markup = watched
    .map(
      ({
        original_title,
        poster_path,
        vote_average,
        id,
        genre_ids,
        release_date,
      }) => {
        let posterPath = ``;
        if (poster_path) {
          posterPath = `https://image.tmdb.org/t/p/w400/${poster_path}`;
        } else {
          posterPath =
            'https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in';
        }
        return `<li class='films-gallery__item' key='${id}' type='watched'>
            <img
                class='films-gallery__img'
                src='${posterPath}'
                alt='${original_title}'
                width
                loading='lazy'
            />
            <span class='films-gallery__rate'>${vote_average.toFixed(1)}</span>
            <div class='films-gallery__wrap'>
                <h2 class='films-gallery__title'>${original_title}</h2>
                <div class='films-gallery__info'>
                <p class='films-gallery__text'>${genre_ids}</p>
                <p class='films-gallery__age'>| ${release_date}</p>
                </div>
            </div>
            </li>`;
      }
    )
    .join('');
  galleryEl.insertAdjacentHTML('afterbegin', markup);

  setGalleryClickListeners();
}

function onlibQueueBtnEl() {
  clear();
  changeQueueActiveBtn();
  let queue = load('queue');
  if (!queue) {
    return;
  }
  let markup = queue
    .map(
      ({
        original_title,
        poster_path,
        vote_average,
        id,
        genre_ids,
        release_date,
      }) => {
        let posterPath = ``;
        if (poster_path) {
          posterPath = `https://image.tmdb.org/t/p/w400/${poster_path}`;
        } else {
          posterPath =
            'https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in';
        }
        return `<li class='films-gallery__item' key='${id}' type='queue'>
            <img
                class='films-gallery__img'
                src='${posterPath}'
                alt='${original_title}'
                width
                loading='lazy'
            />
            <span class='films-gallery__rate'>${vote_average.toFixed(1)}</span>
            <div class='films-gallery__wrap'>
                <h2 class='films-gallery__title'>${original_title}</h2>
                <div class='films-gallery__info'>
                <p class='films-gallery__text'>${genre_ids}</p>
                <p class='films-gallery__age'>| ${release_date}</p>
                </div>
            </div>
            </li>`;
      }
    )
    .join('');
  galleryEl.insertAdjacentHTML('afterbegin', markup);
  setGalleryClickListeners();
}

function clear() {
  galleryEl.innerHTML = '';
}

function changeWatchActiveBtn() {
  libWatchedBtnEl.setAttribute('disabled', 'disabled');
  libQueueBtnEl.removeAttribute('disabled');
}

function changeQueueActiveBtn() {
  libQueueBtnEl.setAttribute('disabled', 'disabled');
  libWatchedBtnEl.removeAttribute('disabled');
}
