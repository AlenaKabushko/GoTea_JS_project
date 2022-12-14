import {
  requestData,
  requestTypes,
  getServerData,
  getNextServerData,
  renderMoviesMarkup,
} from './fetchUrl';

import { load, save, remove } from './localstorage';
import { spinnerOff } from './spinner';
import { libMarkup } from './libMarkup';

const modalWindow = document.querySelector('.film-card');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.icon-card-close');
const modalTrailer = document.querySelector('.trailer');
const btnTrailerClose = document.querySelector('.icon-video-close');
const myLibrary = document.querySelector('.is-active-page.library');
const galleryEl = document.querySelector('.films-gallery');

function setGalleryClickListeners() {
  const filmCards = document.querySelectorAll('.films-gallery__item');
  filmCards.forEach(filmCard =>
    filmCard.addEventListener('click', onGalleryCardClick)
  );
}

function onGalleryCardClick(event) {
  event.preventDefault();

  const cardNode = event.currentTarget;
  const movieId = cardNode.attributes.key.value;

  let movie = null;
  const type = cardNode.attributes.getNamedItem('type');
  if (type) {
    let storaged = load(type.value);
    if (!storaged) {
      return;
    }
    movie = storaged.find(element => element.id == movieId);
  } else {
    movie = requestData.movies.results.find(element => element.id == movieId);
  }

  if (!movie) {
    return;
  }

  renderDataToModalCard(movie);

  if (window.matchMedia('(max-width: 767px)').matches) {
    modalWindow.style.top = window.pageYOffset + 'px';
  }

  modalWindow.classList.add('active');
  overlay.classList.add('active');

  btnClose.addEventListener('click', onButtonCloseClick);
  document.body.addEventListener('keydown', onEscapePress, false);
  overlay.addEventListener('click', onOverlayClick);
  spinnerOff();
}

function onEscapePress(event) {
  const key = event.code;

  if (key === 'Escape') {
    const iframeMarkup = modalTrailer.querySelector('#ytplayer');
    if (iframeMarkup) {
      closeTrailerWindow();
      return;
    }
    closeWindow();
  }
}

function onButtonCloseClick(event) {
  closeWindow();
}

function onOverlayClick(event) {
  const iframeMarkup = modalTrailer.querySelector('#ytplayer');
  if (iframeMarkup) {
    closeTrailerWindow();
    return;
  }
  closeWindow();
}

function onBtnWatchTrailerClick(event) {
  const markup = `
  <iframe id="ytplayer" type="text/html" 
    src="https://www.youtube.com/embed/${event.target.dataset.trailerId}?autoplay=1&origin=https://alenakabushko.github.io/GoTea_JS_project/"
  frameborder="0"/>
  `;

  const iframeMarkup = modalTrailer.querySelector('#ytplayer');
  if (iframeMarkup) {
    iframeMarkup.remove();
  }

  modalTrailer.insertAdjacentHTML('afterbegin', markup);

  modalTrailer.classList.add('active');
  overlay.style.zIndex = 40;

  btnTrailerClose.addEventListener('click', onBtnTrailerCloseClick);

  spinnerOff();
}

function onBtnTrailerCloseClick(event) {
  closeTrailerWindow();
}

async function getMovieTrailer(movieId) {
  requestData.id = movieId;
  try {
    const { results } = await getServerData(requestTypes.VIDEO);

    const trailerObj = results.find(element => element.type === 'Trailer');
    if (trailerObj) {
      return trailerObj.key;
    } else {
      return undefined;
    }
  } catch {
    error => setErrorMessage(error.message);
  }
}

async function renderDataToModalCard(movie) {
  const trailerID = await getMovieTrailer(movie.id);

  const {
    id,
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genre_ids,
    overview,
  } = movie;

  const markup = `
   <div class="image">
    <img
      class="image__picture"
      src=${
        !!poster_path
          ? 'https://image.tmdb.org/t/p/w780' + poster_path
          : 'https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in'
      }
      alt="${title}"
    />
  </div>
  <div class="description">
    <p class="description__title">${title}</p>
    <ul class="description-list">
      <li class="description-list__item">
        <ul class="description-list__values">
          <li class="description-list__title">Vote / Votes</li>
          <li class="description-list__value">
            <span class="description-list__value--vote-orange">${vote_average.toFixed(
              1
            )}</span>
            /
            <span class="description-list__value--vote-grey">${vote_count}</span>
          </li>
        </ul>
      </li>
      <li class="description-list__item">
        <ul class="description-list__values">
          <li class="description-list__title">Popularity</li>
          <li class="description-list__value">${popularity}</li>
        </ul>
      </li>
      <li class="description-list__item">
        <ul class="description-list__values">
          <li class="description-list__title">Original Title</li>
          <li class="description-list__value">${original_title}</li>
        </ul>
      </li>
      <li class="description-list__item">
        <ul class="description-list__values">
          <li class="description-list__title">Genre</li>
          <li class="description-list__value">${
            genre_ids.split(',').length > 3 ? 'Other' : genre_ids
          }</li>
        </ul>
      </li>
    </ul>
    <div class="film-about">
      <p class="film-about__header">About</p>
      <p class="film-about__text">
        ${overview}
      </p>
    </div>
    <div class="buttons">
      <button type="button" class="btn btn-watch-modal" id="btn-to-watched" data-id ="${id}">
        ADD TO WATCHED
      </button>
      <button type="button" class="btn btn-queue-modal" id="btn-to-queue" data-id ="${id}">
       ADD TO QUEUE
      </button>
      ${
        trailerID
          ? '<button type="button" class="btn btn-queue-modal" id="btn-watch-trailer" data-trailer-id=' +
            trailerID +
            '>WATCH TRAILER</button>'
          : ''
      }
    </div>
  </div>
  `;

  removeOldMarkup();
  modalWindow.insertAdjacentHTML('afterbegin', markup);

  const btnWatchTrailer = document.querySelector('#btn-watch-trailer');
  if (btnWatchTrailer) {
    btnWatchTrailer.addEventListener('click', onBtnWatchTrailerClick);
  }

  // ..............Watch / Queue

  const btnQueue = document.querySelector('#btn-to-queue');
  const btnWatch = document.querySelector('#btn-to-watched');
  btnTextSaver(id);

  btnQueue.addEventListener('click', onQueueBtnClick);
  btnWatch.addEventListener('click', onWatchBtnClick);

  function onWatchBtnClick(e) {
    let openedMovie = movie;

    if (e.target.className === 'btn btn-watch-modal') {
      if (e.target.innerHTML === 'remove from watched') {
        let watched = load('watched');
        let index = watched.findIndex(film => film.id === openedMovie.id);
        watched.splice(index, 1);
        save('watched', watched);
        btnWatch.innerHTML = 'add to watched';
        if (myLibrary) {
          btnWatch.classList.add('visually-hidden');
          clear();
          let markup = watched.map(libMarkup).join('');
          galleryEl.insertAdjacentHTML('afterbegin', markup);
        }

        setGalleryClickListeners();

        return;
      }

      onBtnAddToWatchedClick();
    }
  }

  function onBtnAddToWatchedClick() {
    let openedMovie = movie;

    btnWatch.innerHTML = 'remove from watched';

    let watchedFilms = [];
    watchedFilms = load('watched');

    if (watchedFilms) {
      const hasMovie = watchedFilms.find(
        watchedFilm => watchedFilm.id === openedMovie.id
      );
      if (hasMovie) {
        return;
      }

      watchedFilms.push(openedMovie);
      save('watched', watchedFilms);
    } else {
      watchedFilms = [openedMovie];
      save('watched', watchedFilms);
    }
  }

  function onQueueBtnClick(e) {
    let openedMovie = movie;

    if (e.target.className === 'btn btn-queue-modal') {
      if (e.target.innerHTML === 'remove from queue') {
        let queued = load('queue');
        let index = queued.findIndex(film => film.id === openedMovie.id);
        queued.splice(index, 1);
        save('queue', queued);
        btnQueue.innerHTML = 'add to queue';
        if (myLibrary) {
          btnQueue.classList.add('visually-hidden');
          clear();
          let markup = queued.map(libMarkup).join('');
          galleryEl.insertAdjacentHTML('afterbegin', markup);
        }
        setGalleryClickListeners();
        return;
      }

      onBtnAddToQueueClick();
    }
  }

  function onBtnAddToQueueClick() {
    let openedMovie = movie;

    btnQueue.innerHTML = 'remove from queue';

    let queuedFilms = [];
    queuedFilms = load('queue');

    if (queuedFilms) {
      const hasMovie = queuedFilms.find(
        queuedFilm => queuedFilm.id === openedMovie.id
      );
      if (hasMovie) {
        return;
      }
      queuedFilms.push(openedMovie);
      save('queue', queuedFilms);
    } else {
      queuedFilms = [openedMovie];
      save('queue', queuedFilms);
    }
  }
}

function removeOldMarkup() {
  const imageMarkup = modalWindow.querySelector('.image');
  if (imageMarkup) {
    imageMarkup.remove();
  }
  const descriptionMarkup = modalWindow.querySelector('.description');
  if (descriptionMarkup) {
    descriptionMarkup.remove();
  }
}

function closeWindow() {
  modalWindow.classList.remove('active');
  modalWindow.style.top = '50%';

  overlay.classList.remove('active');
  overlay.removeEventListener('click', onOverlayClick);

  document.body.removeEventListener('keydown', onEscapePress);

  btnClose.removeEventListener('click', onButtonCloseClick);
}

function closeTrailerWindow() {
  modalTrailer.classList.remove('active');
  const iframeMarkup = modalTrailer.querySelector('#ytplayer');
  if (iframeMarkup) {
    iframeMarkup.remove();
  }
  overlay.style.zIndex = 20;
}

function btnTextSaver(id) {
  const btnQueue = document.querySelector('#btn-to-queue');
  const btnWatch = document.querySelector('#btn-to-watched');

  let toWatch = load('watched');
  let toQueue = load('queue');
  if (toWatch === undefined) {
    return;
  }

  if (toQueue === undefined) {
    return;
  }

  if (
    toWatch.find(film => film.id === id) &&
    toQueue.find(film => film.id === id)
  ) {
    btnWatch.textContent = 'remove from watched';
    btnQueue.textContent = 'remove from queue';
    return;
  }

  if (toWatch.find(film => film.id === id)) {
    btnWatch.textContent = 'remove from watched';
    return;
  }

  if (toQueue.find(film => film.id === id)) {
    btnQueue.textContent = 'remove from queue';
    return;
  }
}

function clear() {
  galleryEl.innerHTML = '';
}

export { setGalleryClickListeners };
