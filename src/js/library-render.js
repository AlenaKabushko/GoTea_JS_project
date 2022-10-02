// import axios from 'axios';
// import { setGalleryClickListeners } from './gallery-card-modal';
// import { makePagination, makePaginationBtn } from './pagination';
// import { requestData, requestTypes, getServerData } from './fetchUrl';
// import { load, save, remove } from './localstorage';

// const libNavLinkEl = document.querySelector('.selector-class');
// const libWatchedBtnEl = document.querySelector(
//   '.header__library-button > .btn-watch'
// );
// const libQueueBtnEl = document.querySelector(
//   '.header__library-button > .btn-queue'
// );
// const galleryEl = document.querySelector('.films-gallery');

// // function getWatchedAndQueuedMovies() {
// //   let arrWatchId = [];
// //   let arrQueueId = [];
// //   if (load('watched')) {
// //     arrWatchId = load('watched');
// //   }
// //   if (load('queue')) {
// //     arrQueueId = load('queue');
// //   }
// //   const arrAllId = [...arrWatchId, ...arrQueueId];

// //   let arrMoviesById = [];
// //   for (let id of arrAllId) {
// //     requestData.id = id;
// //     getServerData(requestTypes.ID)
// //       .then(movies => {
// //         return movies;
// //       })
// //       .then(movies => {
// //         arrMoviesById.push(movies);
// //         if (arrMoviesById.includes(id)) {
// //           return;
// //         } else {
// //           return arrMoviesById;
// //         }
// //       })
// //       .then(arrMoviesById => {
// //         let markup = arrMoviesById
// //           .map(
// //             ({
// //               original_title,
// //               poster_path,
// //               vote_average,
// //               id,
// //               genre_ids,
// //               release_date,
// //             }) => {
// //               let posterPath = ``;
// //               if (poster_path) {
// //                 posterPath = `https://image.tmdb.org/t/p/w400/${poster_path}`;
// //               } else {
// //                 posterPath =
// //                   'https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in';
// //               }
// //               return `<li class='films-gallery__item' key='${id}'>
// //             <img
// //                 class='films-gallery__img'
// //                 src='${posterPath}'
// //                 alt='${original_title}'
// //                 width
// //                 loading='lazy'
// //             />
// //             <span class='films-gallery__rate'>${vote_average.toFixed(1)}</span>
// //             <div class='films-gallery__wrap'>
// //                 <h2 class='films-gallery__title'>${original_title}</h2>
// //                 <div class='films-gallery__info'>
// //                 <p class='films-gallery__text'>${genre_ids}</p>
// //                 <p class='films-gallery__age'>| ${release_date}</p>
// //                 </div>
// //             </div>
// //             </li>`;
// //             }
// //           )
// //           .join('');
// //         return markup;
// //       })
// //       .then(markup => {
// //         galleryEl.insertAdjacentHTML('afterbegin', markup);
// //       });
// //   }
// // }

// // libNavLinkEl.addEventListener('click', onlibQueueBtnEl);
// // function onlibQueueBtnEl(e) {
// //   e.preventdefault();
// //   getWatchedAndQueuedMovies();
// // }

// // libQueueBtnEl.addEventListener('click', onlibQueueBtnEl);
// libWatchedBtnEl.addEventListener('click', onlibWatchedBtnEl);

// function onlibWatchedBtnEl(e) {
//   galleryEl.innerHTML = ' ';
//   arrWatchId = load('watched');

//   let watchedMoviesById = [];
//   for (let id of arrWatchId) {
//     requestData.id = id;
//     getServerData(requestTypes.ID)
//       .then(movies => {
//         return movies;
//       })
//       .then(movies => {
//         watchedMoviesById.push(movies);
//         if (watchedMoviesById.includes(id)) {
//           return;
//         } else {
//           return watchedMoviesById;
//         }
//       })
//       .then(watchedMoviesById => {
//         let uniqeMovie = watchedMoviesById.filter(
//           (film, index, arr) => arr.indexOf(film) === index
//         );
//         if (uniqeMovie.includes) console.log(id);

//         let markup = watchedMoviesById
//           .map(
//             ({
//               original_title,
//               poster_path,
//               vote_average,
//               id,
//               genre_ids,
//               release_date,
//             }) => {
//               let posterPath = ``;
//               if (poster_path) {
//                 posterPath = `https://image.tmdb.org/t/p/w400/${poster_path}`;
//               } else {
//                 posterPath =
//                   'https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in';
//               }
//               return `<li class='films-gallery__item' key='${id}'>
//             <img
//                 class='films-gallery__img'
//                 src='${posterPath}'
//                 alt='${original_title}'
//                 width
//                 loading='lazy'
//             />
//             <span class='films-gallery__rate'>${vote_average.toFixed(1)}</span>
//             <div class='films-gallery__wrap'>
//                 <h2 class='films-gallery__title'>${original_title}</h2>
//                 <div class='films-gallery__info'>
//                 <p class='films-gallery__text'>${genre_ids}</p>
//                 <p class='films-gallery__age'>| ${release_date}</p>
//                 </div>
//             </div>
//             </li>`;
//             }
//           )
//           .join('');
//         return markup;
//       })
//       .then(markup => {
//         galleryEl.insertAdjacentHTML('afterbegin', markup);
//       });
//   }
// }

// function onlibQueueBtnEl(e) {}
