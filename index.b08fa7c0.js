var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in r){var s=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,s.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=s),s("lkfBv"),s("2ix2C");var a=s("lkfBv");function n(e){let t=[];const r=document.getElementsByClassName("select-items"),s=document.getElementsByClassName("select-selected"),a=r.length,n=s.length;for(let r=0;r<n;r++)e==s[r]?t.push(r):s[r].classList.remove("select-arrow-active");for(let e=0;e<a;e++)t.indexOf(e)&&r[e].classList.add("select-hide")}function l(e){switch(document.querySelector(`.custom-select.${e}`).querySelector(".select-selected").textContent){case"Year":return"";case"2022":return"&primary_release_date.gte=2022-01-01";case"2021":return"&primary_release_year=2021";case"2020":return"&primary_release_year=2020";case"2016-19":return"&primary_release_date.gte=2016-01-01&primary_release_date.lte=2019-12-31";case"2010-15":return"&primary_release_date.gte=2010-01-01&primary_release_date.lte=2015-12-31";case"2000s":return"&primary_release_date.gte=2000-01-01&primary_release_date.lte=2009-12-31";case"1990s":return"&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31";case"1980s":return"&primary_release_date.gte=1980-01-01&primary_release_date.lte=1989-12-31";case"1970s":return"&primary_release_date.gte=1970-01-01&primary_release_date.lte=1979-12-31";case"1960s":return"&primary_release_date.lte=1969-12-31"}}function i(){const e=document.getElementsByClassName("custom-multi-select"),t=e.length;for(let r=0;r<t;r++){const t=e[r].getElementsByTagName("select")[0],s=t.length,a=document.createElement("DIV");a.setAttribute("class","select-selected"),a.innerHTML=t.options[0].innerHTML,e[r].appendChild(a);const l=document.createElement("DIV");l.setAttribute("class","select-items select-hide"),t.array=[],t.array.push(0);for(let e=1;e<s;e++){const r=document.createElement("DIV");r.innerHTML=t.options[e].innerHTML,1===e?(t.array.push(1),r.setAttribute("class","same-as-selected")):t.array.push(0),r.addEventListener("click",(function(e){const r=this.parentNode.previousSibling;for(let e=1;e<s;e++)if(t.options[e].innerHTML===this.innerHTML){if(1===e){t.array[1]||(t.array[1]=1,t.array[0]=0,l.childNodes[0].setAttribute("class","same-as-selected"));for(let e=2;e<s;e++)t.array[e]&&(l.childNodes[e-1].removeAttribute("class"),t.array[e]=0)}else t.array[1]&&(l.childNodes[0].removeAttribute("class"),t.array[1]=0),t.array[e]=1-t.array[e],t.array[e]?(t.array[0]+=1,l.childNodes[e-1].setAttribute("class","same-as-selected")):(t.array[0]-=1,l.childNodes[e-1].removeAttribute("class")),0===t.array[0]&&(t.array[1]=1,l.childNodes[0].setAttribute("class","same-as-selected"));r.innerHTML=c(t,s);break}})),l.appendChild(r)}e[r].appendChild(l),a.addEventListener("click",(function(e){e.stopPropagation(),n(this),this.nextSibling.classList.remove("select-hide"),this.classList.add("select-arrow-active")}))}}function c(e,t){if(0===e.array[0])return"Genres";{let r="";for(let s=2;s<t;s+=1)if(e.array[s]){r=e.options[s].innerHTML;break}return 1===e.array[0]?r:`${r}, +${e.array[0]-1}`}}function o(e){const t=document.querySelector(`.custom-multi-select.${e}`).getElementsByTagName("select")[0];let r="";if(0!==t.array[0])for(let e=2;e<t.length;e+=1)t.array[e]&&(""!==r&&(r+=","),r+=t.options[e].value);return r}s("04jNI"),document.addEventListener("click",n);a=s("lkfBv");function d(e){const t=function(){let e='<select><option value="Genres">Genres</option><option value="None">None</option>';return e+=a.requestData.genres.map((({id:e,name:t})=>`<option value="${e}">${t}</option>`)).join(""),e+="</select>",e}();document.querySelector(`.custom-multi-select.${e}`).innerHTML=t,i()}!function(){const e=document.getElementsByClassName("custom-select"),t=e.length;for(let r=0;r<t;r++){const t=e[r].getElementsByTagName("select")[0],s=t.length,a=document.createElement("DIV");a.setAttribute("class","select-selected"),a.innerHTML=t.options[t.selectedIndex].innerHTML,e[r].appendChild(a);const l=document.createElement("DIV");l.setAttribute("class","select-items select-hide"),t.selectedIndex=0;for(let e=1;e<s;e++){const r=document.createElement("DIV");r.innerHTML=t.options[e].innerHTML,1===e&&r.setAttribute("class","same-as-selected"),r.addEventListener("click",(function(e){const r=this.parentNode.previousSibling;for(let e=0;e<s;e++)if(t.options[e].innerHTML===this.innerHTML){t.selectedIndex=e,r.innerHTML="None"===this.innerHTML?"Year":this.innerHTML;const s=this.parentNode.getElementsByClassName("same-as-selected"),a=s.length;for(let e=0;e<a;e++)s[e].removeAttribute("class");this.setAttribute("class","same-as-selected");break}r.click()})),l.appendChild(r)}e[r].appendChild(l),a.addEventListener("click",(function(e){e.stopPropagation(),n(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")}))}}();document.querySelector(".filter-btn").addEventListener("click",(function(e){const t=l("filter-years"),r=o("filter-genres");a.requestData.page=1,a.requestData.discover="",r.length&&(a.requestData.discover=`&with_genres=${r}`),a.requestData.discover+=t,a.requestData.discover?(0,a.getServerData)(a.requestTypes.DISCOVER).then((e=>{(0,a.renderMoviesMarkup)(e)})):(0,a.getServerData)(a.requestTypes.TRENDING).then((e=>{(0,a.renderMoviesMarkup)(e)}))}));document.querySelector(".header__navigation-button-filter").addEventListener("click",(function(e){document.querySelector(".filter__container").classList.toggle("visually-hidden")}));var u=s("2nhTy");(0,a.getServerData)(a.requestTypes.GENRE).then((e=>(a.requestData.genres=e.genres,d("filter-genres"),!0))).then((()=>{a.requestData.page=1,(0,a.getServerData)(a.requestTypes.TRENDING).then((e=>{(0,a.renderMoviesMarkup)(e)})).then((()=>{console.log(a.requestData.movies.total_pages),(0,u.makePaginationBtn)(a.requestData.movies.total_pages),(0,u.makePagination)(a.requestData.movies.total_pages,20)}))}));a=s("lkfBv");s("04jNI"),s("2nhTy");const m=document.querySelector(".header__form-block"),p=document.querySelector(".header__form-input");m.addEventListener("click",(e=>{e.preventDefault(),a.requestData.search=`${p.value}`,a.requestData.page=1,(0,a.getServerData)(a.requestTypes.SEARCH).then((e=>{(0,a.renderMoviesMarkup)(e),p.value=""}))})),s("fCLtP"),s("bOFJ0"),s("04jNI"),s("70dOu"),s("2nhTy"),s("k1Hfy"),s("h53OD");
//# sourceMappingURL=index.b08fa7c0.js.map