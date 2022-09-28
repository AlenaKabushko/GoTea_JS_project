import axios from 'axios';
const refs = {
    filmsGallery: document.querySelector('.films-gallery'),
}

const API_KEY = '0ad512fb225eecaea999568cb90b6aa0';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

const getTrendingList = async (page = 1) => {
  const { data } = await axios.get(
    `/movie/popular?api_key=${API_KEY}&page=${page}`
  );
  return data;
};
getTrendingList();

function createFilmListMarkup(data) {
  
      return data
          .map(
              ({
                  original_title,
                  poster_path,
                  overview,
                  vote_average,
                  id,
                  genre_names,
                  release_date,
              }) => {
                  return `<li class='films-gallery__item' key='${id}'>
            <img
              class='films-gallery__img'
              src='${poster-path}'
              alt='${original_title}'
              width
              loading='lazy'
            />
            <span class='films-gallery__rate'>${vote_average.toFixed(1)}</span>
            <div class='films-gallery__wrap'>
              <h2 class='films-gallery__title'>${original_title}</h2>
              <div class='films-gallery__info'>
                <p class='films-gallery__text'>${genre_names}</p>
                <p class='films-gallery__age'>| ${release_date}</p>
              </div>
            </div>
          </li>`}
      )
      .join('');
  }

const filmsList = createFilmListMarkup(data.results);
refs.filmsGallery.innerHTML = filmsList;
