import {
  createCustomOneSelect,
  setOption,
  getOption,
  getOptionNum,
  createCustomMultiSelect,
  getMultiOption,
} from './select.js';

import {
  requestData,
  requestTypes,
  getServerData,
  renderMoviesMarkup,
} from './fetchUrl.js';

export function fillGenresFiltr(classSelect) {
  const markup = markupFilterGenres();
  const select = document.querySelector(`.custom-multi-select.${classSelect}`);
  select.innerHTML = markup;
  createCustomMultiSelect();
  createCustomOneSelect();
}

function markupFilterGenres() {
  let markup =
    '<select><option value="Genres">Genres</option><option value="None">None</option>';
  markup += requestData.genres
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
  markup += '</select>';
  return markup;
}

const filterBtn = document.querySelector('.filter-btn');
filterBtn.addEventListener('click', function (e) {
  requestData.idxYears = getOptionNum('filter-years');
  const filterYears = getOption('filter-years');
  requestData.valuesGenres = getMultiOption('filter-genres');
  requestData.page = 1;
  requestData.discover = '';
  if (requestData.valuesGenres.length) {
    requestData.discover = `&with_genres=${requestData.valuesGenres}`;
  }
  requestData.discover += filterYears;
  if (requestData.discover) {
    getServerData(requestTypes.DISCOVER).then(movies => {
      renderMoviesMarkup(movies);
    });
  } else {
    getServerData(requestTypes.TRENDING).then(movies => {
      renderMoviesMarkup(movies);
    });
  }
});

const filterNavBtn = document.querySelector(
  '.header__navigation-button-filter'
);
filterNavBtn.addEventListener('click', function (e) {
  const filterContainer = document.querySelector('.filter__container');
  filterContainer.classList.toggle('visually-hidden');
});
