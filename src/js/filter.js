import {
  createCustomOneSelect,
  setOption,
  getOption,
  createCustomMultiSelect,
  getMultiOption,
} from './select.js';

import {
  requestData,
  requestTypes,
  getServerData,
  renderMoviesMarkup,
} from './fetchUrl.js';

createCustomOneSelect();

export function fillGenresFiltr(classSelect) {
  const markup = markupFilterGenres();
  const select = document.querySelector(`.custom-multi-select.${classSelect}`);
  select.innerHTML = markup;
  createCustomMultiSelect();
}

function markupFilterGenres() {
  let markup =
    '<select><option value="None">None</option><option value="None">None</option>';
  markup += requestData.genres
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
  markup += '</select>';
  return markup;
}

const filterBtn = document.querySelector('.filter-btn');
filterBtn.addEventListener('click', function (e) {
  const filterSearch = getOption('filter-search');
  const filterGendes = getMultiOption('filter-genres');
  requestData.page = 1;
  if (filterGendes.length) {
    requestData.discover = filterGendes;
    getServerData(requestTypes.DISCOVER).then(movies => {
      renderMoviesMarkup(movies);
    });
  } else {
    switch (filterSearch) {
      case 'Popular':
        getServerData(requestTypes.POPULAR).then(movies => {
          renderMoviesMarkup(movies);
        });
        break;
      case 'Top rated':
        getServerData(requestTypes.TOPRATED).then(movies => {
          renderMoviesMarkup(movies);
        });
        break;
      default:
        getServerData(requestTypes.TRENDING).then(movies => {
          renderMoviesMarkup(movies);
        });
    }
  }
});
