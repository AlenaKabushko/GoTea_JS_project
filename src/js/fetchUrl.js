import axios from 'axios';
const refs = {
    filmsGallery: document.querySelector('.films-gallery'),
}

const API_KEY = '0ad512fb225eecaea999568cb90b6aa0';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
let page = 1;

async function getTrendingList() {
    const response = await axios.get(
        `/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );
    
    console.log(response.data.results)
    return response.data.results;
    
}


getTrendingList()





function createFilmListMarkup(movies) {
    
    return movies
        .map(
            (movie) => {
                return `<li class='films-gallery__item' key='${movie.id}'>
            <img
                class='films-gallery__img'
                src='${movie.poster_path}'
                alt='${movie.original_title}'
                width
                loading='lazy'
            />
            <span class='films-gallery__rate'>${movie.vote_average.toFixed(1)}</span>
            <div class='films-gallery__wrap'>
                <h2 class='films-gallery__title'>${movie.original_title}</h2>
                <div class='films-gallery__info'>
                <p class='films-gallery__text'>${movie.genre_names}</p>
                <p class='films-gallery__age'>| ${movie.release_date}</p>
                </div>
            </div>
            </li>`;
}
    )
    .join('');
}


refs.filmsGallery.insertAdjacentHTML('beforeend', createFilmListMarkup());
