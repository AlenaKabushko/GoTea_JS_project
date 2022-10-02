import { requestData, requestTypes, getServerData } from './fetchUrl';
import { load, save, remove } from './localstorage';
import { spinnerOff } from './spinner';

const modalWindow = document.querySelector('.film-card');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.icon-card-close');
const modalTrailer = document.querySelector('.trailer');
const btnTrailerClose = document.querySelector('.icon-video-close');

function setGalleryClickListeners() {
  const filmCards = document.querySelectorAll('.films-gallery__item');
  filmCards.forEach(filmCard =>
    filmCard.addEventListener('click', onGalleryCardClick)
  );
}

function onGalleryCardClick(event) {
  event.preventDefault();

  const cardNode = event.currentTarget;

  renderDataToModalCard(cardNode);

  if (window.matchMedia('(max-width: 767px)').matches) {
    modalWindow.style.top = window.pageYOffset + 'px';
  }

  modalWindow.classList.add('active');
  overlay.classList.add('active');

  btnClose.addEventListener('click', onButtonCloseClick);
  document.body.addEventListener('keydown', onEscapePress, false);
  overlay.addEventListener('click', onOverlayClick);

  // console.log(btnClose);

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
  // console.log(event);
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
  const { results } = await getServerData(requestTypes.VIDEO);
  const trailerObj = results.find(element => element.type === 'Trailer');
  if (trailerObj) {
    return trailerObj.key;
  } else {
    return undefined;
  }
}

async function renderDataToModalCard(cardNode) {
  const movie = requestData.movies.results.find(
    element => element.id == cardNode.attributes.key.value
  );

  if (!movie) {
    // console.log('НЕ УДАЛОСЬ НАЙТИ ФИЛЬМ В ДАННЫХ ПО ID!!!');
    return;
  }

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
  btnTextSaver(id);
  const btnQueue = document.querySelector('#btn-to-queue');
  const btnWatch = document.querySelector('#btn-to-watched');

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
  console.log(id);
  let toWatch = load('watched');
  console.log(toWatch);
  let toQueue = load('queue');
  console.log(toQueue);

  let TofindinWatched = toWatch.find(film => film.id === id);
  console.log(TofindinWatched.id);
}

export { setGalleryClickListeners };

// ..............Watch / Queue

// function addWatchList() {
//   const btnWatch = document.querySelector('#btn-to-watched');
//   if (btnWatch.classList.contains('active')) {
//     removeFromWatchedList(id);
//   } else {
//     let watchList = [];
//     let localWatchListJson = load('watched');
//     if (localWatchListJson) {
//       watchList = [...localWatchListJson];
//     }

//     let queueList = [];
//     let localQueueListJson = load('queue');
//     if (localQueueListJson) {
//       queueList = [...localQueueListJson];
//     }
//     let queueSet = new Set(queueList);
//     if (queueSet.has(id)) {
//       remove('queue');
//       let index = queueList.indexOf(id);
//       queueList.splice(index, 1);
//       save('queue', queueList);
//     }

//     const watchSet = new Set(watchList);
//     if (watchSet.has(id)) {
//       textContentBtn(id);
//     } else {
//       watchList.push(id);
//       save('watched', watchList);
//       textContentBtn(id);
//     }
//   }
// }

// function removeFromWatchedList(id) {
//   let watchList = [];
//   let localWatchListJson = load('watched');
//   if (localWatchListJson) {
//     watchList = [...localWatchListJson];
//   }

//   remove('watched');
//   let index = watchList.indexOf(id);
//   watchList.splice(index, 1);
//   save('watched', watchList);

//   textContentBtn();
// }

// function removeFromQueueList(id) {
//   let queueList = [];
//   let localQueueListJson = load('queue');
//   if (localQueueListJson) {
//     queueList = [...localQueueListJson];
//   }

//   remove('queue');
//   let index = queueList.indexOf(id);
//   queueList.splice(index, 1);
//   save('queue', queueList);

//   textContentBtn();
// }

// function addQueueList() {
//   const btnQueue = document.querySelector('#btn-to-queue');
//   if (btnQueue.classList.contains('active')) {
//     removeFromQueueList(id);
//   } else {
//     let queueList = [];
//     let localQueueListJson = load('queue');
//     if (localQueueListJson) {
//       queueList = [...localQueueListJson];
//     }

//     let watchList = [];
//     let localWatchListJson = load('watched');
//     if (localWatchListJson) {
//       watchList = [...localWatchListJson];
//     }
//     let watchSet = new Set(watchList);
//     if (watchSet.has(id)) {
//       remove('watched');
//       let index = watchList.indexOf(id);
//       watchList.splice(index, 1);
//       save('watched', watchList);
//     }

//     const queueSet = new Set(queueList);
//     if (queueSet.has(id)) {
//       textContentBtn(id);
//     } else {
//       queueList.push(id);
//       save('queue', queueList);
//       textContentBtn(id);
//     }
//   }
// }

// function inList(id, list) {
//   let arrList = [];
//   let localListJson = load(list);
//   if (localListJson) {
//     arrList = [...localListJson];
//   }
//   const listSet = new Set(arrList);
//   return listSet.has(id);
// }

// async function textContentBtn(id) {
//   const btnQueue = document.querySelector('#btn-to-queue');
//   const btnWatch = document.querySelector('#btn-to-watched');
//   if (inList(id, 'watched')) {
//     btnWatch.textContent = 'Added to watched';
//     btnWatch.disabled = true;
//     function changeText() {
//       btnWatch.disabled = false;
//       btnWatch.textContent = 'Remove from watched';
//       btnWatch.classList.add('active');
//     }
//     setTimeout(changeText, 500);
//   } else {
//     btnWatch.textContent = 'Add to watched';
//     btnWatch.classList.remove('active');
//     btnWatch.disabled = false;
//   }

//   if (inList(id, 'queue')) {
//     btnQueue.textContent = 'Added to queue';
//     btnQueue.disabled = true;
//     function changeText() {
//       btnQueue.disabled = false;
//       btnQueue.textContent = 'Remove from queue';
//       btnQueue.classList.add('active');
//     }
//     setTimeout(changeText, 500);
//   } else {
//     btnQueue.textContent = 'Add to queue';
//     btnQueue.classList.remove('active');
//     btnQueue.disabled = false;
//   }
// }

// function removeFromWatched(e) {
//   if (e.target.className === 'btn-watch-modal') {
//     if (e.target.innerHTML === 'remove from watched') {
//       const watchItem = load('wathced');
//       let repeated = watchItem.find(item => item.id === openedMovie.id);
//       console.log(repeated);
// save(
//   'watched',
//   watchItem.filter(item => item.id !== openedMovie.id)
// );
// btnWatch.innerHTML = 'add to watched';

//       return;
//     }
//   }
// }
