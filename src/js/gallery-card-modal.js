import { requestData } from './fetchUrl';

const modalWindow = document.querySelector('.film-card');
const overlay = document.querySelector('.overlay');

document.querySelector('.icon-close').addEventListener('click', () => {
  closeWindow();
});

function setGalleryClickListeners() {
  const filmCards = document.querySelectorAll('.films-gallery__item');
  filmCards.forEach(filmCard =>
    filmCard.addEventListener('click', onGalleryCardClick)
  );

  document.body.addEventListener(
    'keydown',
    function (e) {
      const key = e.code;

      if (key === 'Escape') {
        closeWindow();
      }
    },
    false
  );

  overlay.addEventListener('click', () => {
    closeWindow();
  });
}

function onGalleryCardClick(event) {
  event.preventDefault();

  const cardNode = event.currentTarget;

  renderDataToModalCard(cardNode);

  if (window.matchMedia('(max-width: 768px)').matches) {
    modalWindow.style.top = window.pageYOffset + 'px';
  }

  modalWindow.classList.add('active');
  overlay.classList.add('active');
}

function renderDataToModalCard(cardNode) {
  const movie = requestData.movies.results.find(
    element => element.id == cardNode.attributes.key.value
  );

  if (!movie) {
    console.log('НЕ УДАЛОСЬ НАЙТИ ФИЛЬМ В ДАННЫХ ПО ID!!!');
    return;
  }

  const {
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
            <span class="description-list__value--vote-orange">${vote_average}</span>
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
          <li class="description-list__value">${genre_ids}</li>
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
      <button type="button" class="btn btn-watch-modal" id="btn-to-watched">
        ADD TO WATCHED
      </button>
      <button type="button" class="btn btn-queue-modal" id="btn-to-queue">
       ADD TO QUEUE
      </button>
    </div>  
  </div>
  `;

  removeOldMarkup();
  modalWindow.insertAdjacentHTML('afterbegin', markup);
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
  overlay.classList.remove('active');
  modalWindow.style.top = '50%';
}

export { setGalleryClickListeners };
