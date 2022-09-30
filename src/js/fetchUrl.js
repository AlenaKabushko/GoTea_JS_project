import axios from 'axios';
import { spinnerOn, spinnerOff } from './spinner';

// для добавления кликов по отрендеренным карточкам
import { setGalleryClickListeners } from './gallery-card-modal';
import { makePagination, makePaginationBtn } from './pagination';

const refs = {
  filmsGallery: document.querySelector('.films-gallery'),
};

const API_KEY = '0ad512fb225eecaea999568cb90b6aa0';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

//типы запросов
export const requestTypes = {
  TRENDING: 'trending',
  GENRE: 'genre',
  DISCOVER: 'discover',
  SEARCH: 'search',
  ID: 'id',
  VIDEO: 'video',
  POPULAR: 'popular',
  TOPRATED: 'toprated',
};

//глобальный объект с переменными, до которых надо иметь доступ с любого места
export let requestData = {
  //номер запрашиваемой страницы
  page: 1,

  //номер текущего запроса (для пагинации)
  request: requestTypes.TRENDING,

  //строка для фильтра по жанрам
  discover: '',

  //для поиска по id
  id: 0,

  //для поиска по строке
  search: '',

  //полученные данные
  //структура:
  //  page          - полученная страница (= page, которая выше)
  //  results       - массив объектов, максимум 20 штук
  //  total_pages   - общее число страниц
  //  total_results - общее число объектов
  movies: null,

  //массив соответствия номеров жанров и названия
  genres: null,

  //найденный объект по id
  movie: null,

  //найденные видео для id
  videos: null,
};

//функция получения данных с сервера
export const getServerData = async (type = requestTypes.TRENDING) => {
  spinnerOn();
  //requestData.movies = null;
  switch (type) {
    case requestTypes.TRENDING: {
      requestData.request = type;
      const { data } = await axios.get(
        `/trending/movie/day?api_key=${API_KEY}&page=${requestData.page}`
      );
      return data;
    }
    case requestTypes.GENRE: {
      const { data } = await axios.get(`/genre/movie/list?api_key=${API_KEY}`);
      return data;
    }
    case requestTypes.DISCOVER: {
      requestData.request = type;
      const { data } = await axios.get(
        `/discover/movie?api_key=${API_KEY}&page=${requestData.page}&with_genres=${requestData.discover}`
      );
      return data;
    }
    case requestTypes.SEARCH: {
      requestData.request = type;
      const { data } = await axios.get(
        `/search/movie?api_key=${API_KEY}&page=${requestData.page}&query=${requestData.search}`
      );
      return data;
    }
    case requestTypes.ID: {
      const { data } = await axios.get(
        `/movie/${requestData.id}?api_key=${API_KEY}`
      );
      return data;
    }
    case requestTypes.VIDEO: {
      const { data } = await axios.get(
        `/movie/${requestData.id}/videos?api_key=${API_KEY}`
      );
      return data;
    }
    case requestTypes.POPULAR: {
      requestData.request = type;
      const { data } = await axios.get(
        `/movie/popular?api_key=${API_KEY}&page=${requestData.page}`
      );
      return data;
    }
    case requestTypes.TOPRATED: {
      requestData.request = type;
      const { data } = await axios.get(
        `/movie/top_rated?api_key=${API_KEY}&page=${requestData.page}`
      );
      return data;
    }
  }
};

//функция для продолжения текущего запроса для заданной страницы (для пагинации)
//перед вызовом задаем номер страницы. Все остальные данные сохранены в глобальной переменной
export function getNextServerData() {
  getServerData(requestData.request);
}

//-----------------------------------------------------------------------
//на старте:

//запрос массива соответствия номера жанра и названия
getServerData(requestTypes.GENRE)
  .then(data => {
    //сохраним его в глобальной переменной
    requestData.genres = data.genres;
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
        makePaginationBtn(requestData.movies.total_pages)
        makePagination(requestData.movies.total_pages, 20)
      });
  });

//-----------------------------------------------------------------------
//Следующие функции перенесутся в нужные файлы
//Пока здесь для наглядности
//-----------------------------------------------------------------------
//запрос всех данных и их отображение на сегодня
//перед вызовом задаем номер страницу в глобальной переменной
//при "домой" - первую, при пагинации нужную
// requestData.page = 1;
// getServerData(requestTypes.TRENDING).then(movies => {
//   renderMoviesMarkup(movies);
// });

//-----------------------------------------------------------------------
//запрос данных и их отображение при фильтрации по жанрам
//перед вызовом необходимо записать номера жанров в глобальную переменную
//  и задать номер страницы

// requestData.discover = '28,18';
// requestData.page = 2;
// getServerData(requestTypes.DISCOVER).then(movies => {
//   renderMoviesMarkup(movies);
// });

//-----------------------------------------------------------------------
//запрос данных и их отображение при поиске по строке
//перед вызовом необходимо записать строку в глобальную переменную
//  и задать номер страницы

// requestData.search = 'terminator';
// requestData.page = 1;
// getServerData(requestTypes.SEARCH).then(movies => {
//   renderMoviesMarkup(movies);
// });

//-----------------------------------------------------------------------
//запрос данных по ID
//перед вызовом необходимо записать ID в глобальную переменную
//только сохраняет в глобальной переменной

// requestData.id = 1006851;
// getServerData(requestTypes.ID).then(movie => {
//   //формирование строки жанров
//   setMovieGenresNames(movie);
//   requestData.movie = movie;
// });

//-----------------------------------------------------------------------
//запрос video по ID
//перед вызовом необходимо записать ID в глобальную переменную
//только сохраняет в глобальной переменной

// requestData.id = 718930;
// getServerData(requestTypes.VIDEO).then(videos => {
//   requestData.videos = videos.results;
// });

//-----------------------------------------------------------------------
//запрос популярных данных и их отображение на сегодня
//перед вызовом задаем номер страницу в глобальной переменной

// requestData.page = 1;
// getServerData(requestTypes.POPULAR).then(movies => {
//   renderMoviesMarkup(movies);
// });

//-----------------------------------------------------------------------
//запрос рейтинговых данных и их отображение
//перед вызовом задаем номер страницу в глобальной переменной

// requestData.page = 1;
// getServerData(requestTypes.TOPRATED).then(movies => {
//   renderMoviesMarkup(movies);
// });

//-----------------------------------------------------------------------
//продолжение текущего запроса для заданной страницы (для пагинации)
//перед вызовом задаем номер страницы
// requestData.page = 2;
// getNextServerData();

//функция рендеринга принятого массива данных после получения с сервера
export function renderMoviesMarkup(movies) {
  //сохраним в глобальной переменной
  requestData.movies = movies;
  //замена массива чисельных значений жанров на строку
  setGenresNames(movies.results, requestData.genres);
  //получение HTML-кода для вставки в контейнер
  const markupList = createMoviesListMarkup(movies.results);
  //вставка в контейнер
  refs.filmsGallery.innerHTML = markupList;

  //устанавливаем обработчики кликов по карточкам
  setGalleryClickListeners();

  spinnerOff();
}

function createMoviesListMarkup(movies) {
  return movies
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
        return `<li class='films-gallery__item' key='${id}'>
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
}

//функция замены массива жанров на строку (только для поиска по ID)
export function setMovieGenresNames(movie) {
  //усечение даты до года
  movie.release_date = movie.release_date.slice(0, 4);
  //формируем строку жанров
  const genreList = [];
  //сначала создадим массив строк
  movie.genres.map(genre => genreList.push(genre.name));
  //сольем в одну строку
  movie.genres = genreList.join(', ');
}

//функция замены массива жанров на строку
//параметры: массив объектов и массив соответствия номера жанра и названия
function setGenresNames(movies, genresList) {
  console.log(movies, genresList);
  //по всем объектам
  movies.forEach(movie => {
    //усечение даты до года
    movie.release_date = movie.release_date.slice(0, 4);
    //возьмем массив жанров
    const genresIdsList = movie.genre_ids;
    //по всем жанрам
    genresIdsList.forEach((genreId, index, array) => {
      //ищем в массиве соответствия очередной номер жанра
      const genresListItem = genresList.find(genre => genre.id === genreId);
      //находим его индекс в массиве соотввествия
      const idx = genresList.indexOf(genresListItem);
      //пищем на то же место массива вместо числа название
      array[index] = genresList[idx].name;
    });
    if (genresIdsList.length > 2) {
      genresIdsList.splice(2, genresIdsList.length - 1, 'Other');
    }
    //сольем в одну строку и запишем вместо массива чисел строку
    movie.genre_ids = genresIdsList.join(', ');
  });
}

// --------------------------
