var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in l)return l[e].exports;if(e in t){var i=t[e];delete t[e];var n={id:e,exports:{}};return l[e]=n,i.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,l){t[e]=l},e.parcelRequired7c6=i),i("lkfBv"),i("bOFJ0"),i("2ix2C"),i("fCLtP"),i("04jNI"),i("70dOu"),i("2nhTy"),i("k1Hfy"),i("h53OD");var n=i("bOFJ0"),a=i("fCLtP");i("2nhTy");a=i("fCLtP");var r=i("04jNI");const s=document.querySelector(".header__library-button > .btn-watch"),d=document.querySelector(".header__library-button > .btn-queue"),o=document.querySelector(".films-gallery");function c(){o.innerHTML=""}s.addEventListener("click",(function(){c(),s.setAttribute("disabled","disabled"),d.removeAttribute("disabled"),(0,r.spinnerOn)();let e=(0,n.load)("watched");if(!e)return;let l=e.map((({original_title:e,poster_path:l,vote_average:t,id:i,genre_ids:n,release_date:a})=>{let r="";return r=l?`https://image.tmdb.org/t/p/w400/${l}`:"https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in",`<li class='films-gallery__item' key='${i}' type='watched'>\n            <img\n                class='films-gallery__img'\n                src='${r}'\n                alt='${e}'\n                width\n                loading='lazy'\n            />\n            <span class='films-gallery__rate'>${t.toFixed(1)}</span>\n            <div class='films-gallery__wrap'>\n                <h2 class='films-gallery__title'>${e}</h2>\n                <div class='films-gallery__info'>\n                <p class='films-gallery__text'>${n}</p>\n                <p class='films-gallery__age'>| ${a}</p>\n                </div>\n            </div>\n            </li>`})).join("");o.insertAdjacentHTML("afterbegin",l),(0,r.spinnerOff)(),(0,a.setGalleryClickListeners)()})),d.addEventListener("click",(function(){c(),d.setAttribute("disabled","disabled"),s.removeAttribute("disabled"),(0,r.spinnerOn)();let e=(0,n.load)("queue");if(!e)return;let l=e.map((({original_title:e,poster_path:l,vote_average:t,id:i,genre_ids:n,release_date:a})=>{let r="";return r=l?`https://image.tmdb.org/t/p/w400/${l}`:"https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in",`<li class='films-gallery__item' key='${i}' type='queue'>\n            <img\n                class='films-gallery__img'\n                src='${r}'\n                alt='${e}'\n                width\n                loading='lazy'\n            />\n            <span class='films-gallery__rate'>${t.toFixed(1)}</span>\n            <div class='films-gallery__wrap'>\n                <h2 class='films-gallery__title'>${e}</h2>\n                <div class='films-gallery__info'>\n                <p class='films-gallery__text'>${n}</p>\n                <p class='films-gallery__age'>| ${a}</p>\n                </div>\n            </div>\n            </li>`})).join("");o.insertAdjacentHTML("afterbegin",l),(0,r.spinnerOff)(),(0,a.setGalleryClickListeners)()}));
//# sourceMappingURL=library.1bea3481.js.map
