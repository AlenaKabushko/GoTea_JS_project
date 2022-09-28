import axios from 'axios';
const refs = {
    filmsGallery: document.querySelector('.films-gallery'),
}

const API_KEY = '0ad512fb225eecaea999568cb90b6aa0';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

const getTrendingList = async (page = 1) => {
    const {data} = await axios.get(
        `/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );
    return data;
}


getTrendingList(1).then((films) => {
    renderFilmsMarkup(films);
});

function renderFilmsMarkup(data) {
    const markupList = createFilmListMarkup(data.results);
    refs.filmsGallery.innerHTML = markupList;
}

function createFilmListMarkup(movies) {
    
        return movies.map(
        ({
          original_title,
          poster_path,
          vote_average,
          id,
          genre_ids,
          release_date,
            }) => {
                let posterPath = ``;
                if (poster_path) { posterPath = `https://image.tmdb.org/t/p/w400/${poster_path}`;}
                else{posterPath='https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in'}
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
    




