!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);var n=r("cWifi");r("cWifi");r("iNWLi");r("cWifi");r("j1lrD");var s=r("l3CR8"),o=(n=r("cWifi"),r("gsnYQ"));function u(e){var t=function(){var e='<select><option value="Genres">Genres</option><option value="None">None</option>';return e+=n.requestData.genres.map((function(e){var t=e.id,a=e.name;return'<option value="'.concat(t,'">').concat(a,"</option>")})).join(""),e+="</select>"}();document.querySelector(".custom-multi-select.".concat(e)).innerHTML=t,(0,s.createCustomMultiSelect)(),(0,s.createCustomOneSelect)()}document.querySelector(".filter-btn-use").addEventListener("click",(function(e){n.requestData.idxYears=(0,s.getOptionNum)("filter-years");var t=(0,s.getOption)("filter-years");n.requestData.valuesGenres=(0,s.getMultiOption)("filter-genres"),n.requestData.page=1,n.requestData.discover="",n.requestData.valuesGenres.length&&(n.requestData.discover="&with_genres=".concat(n.requestData.valuesGenres)),n.requestData.discover+=t,n.requestData.discover?(0,n.getServerData)(n.requestTypes.DISCOVER).then((function(e){g.currentPage=1,g.setTotalPages(Math.round(e.total_pages/20)),(0,n.renderMoviesMarkup)(e)})):(0,n.getServerData)(n.requestTypes.TRENDING).then((function(e){g.currentPage=1,g.setTotalPages(Math.round(e.total_pages/20)),(0,n.renderMoviesMarkup)(e)}))})),document.querySelector(".filter-btn-reset").addEventListener("click",(function(e){(0,s.setOption)(o.classYears,0),(0,s.setMultiOption)(o.classGenres,""),n.requestTypes.page=1,(0,n.getServerData)(n.requestTypes.TRENDING).then((function(e){g.currentPage=1,g.setTotalPages(Math.round(e.total_pages/20)),(0,n.renderMoviesMarkup)(e)}))})),document.querySelector(".header__navigation-button-filter").addEventListener("click",(function(e){document.querySelector(".filter__container").classList.toggle("visually-hidden")}));var i=document.querySelector(".header__form-button"),c=document.querySelector(".header__form-input");document.querySelector(".header__text-warning");i.addEventListener("click",(function(e){e.preventDefault(),""!==c.value&&" "!==c.value&&(n.requestData.search="".concat(c.value),n.requestData.page=1,(0,n.getServerData)(n.requestTypes.SEARCH).then((function(e){g.currentPage=1,g.setTotalPages(Math.round(e.total_pages/20)),(0,n.renderMoviesMarkup)(e),c.value=""})))})),r("l3CR8");o=r("gsnYQ");r("3wJrr");var l=r("6Sco9");l=r("6Sco9");r("j1lrD"),r("aSICH"),r("cSEba"),r("ghI91");var d=r("jcFG7"),g=(o=r("gsnYQ"),new(0,d.Pagination)(document.getElementById("pagination"),{countPoint:5,stepInterval:5,totalPages:10,onShow:function(e){n.requestData.page=e,(0,n.getNextServerData)().then((function(e){(0,n.renderMoviesMarkup)(e)}))}}));(0,n.getServerData)(n.requestTypes.GENRE).then((function(e){n.requestData.genres=e.genres,u("filter-genres")})).then((function(){var e=(0,l.load)("config");e?(n.requestData.page=e.requestData.page,n.requestData.request=e.requestData.request,n.requestData.discover=e.requestData.discover,n.requestData.id=e.requestData.id,n.requestData.search=e.requestData.search,n.requestData.movies=e.requestData.movies,n.requestData.genres=e.requestData.genres,n.requestData.movie=e.requestData.movie,n.requestData.videos=e.requestData.videos,g.currentPage=n.requestData.page,(0,n.getNextServerData)().then((function(e){g.setTotalPages(Math.round(e.total_pages/20)),(0,n.renderMoviesMarkup)(e)}))):(console.log(!1),n.requestData.page=1,(0,n.getServerData)(n.requestTypes.TRENDING).then((function(e){n.requestData.movies=e,g.setTotalPages(Math.round(e.total_pages/20)),(0,o.saveConfig)(),(0,n.renderMoviesMarkup)(e)})))}))}();
//# sourceMappingURL=index.b7f7e51b.js.map