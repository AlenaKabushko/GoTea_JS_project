import {
  renderMoviesMarkup,
  requestData,
  requestTypes,
  getNextServerData,
  getServerData,
} from './fetchUrl';

export function makePagination(amountPages, rowPage) {
  const paginationBoxRef = document.querySelector('.pagination');
  // console.log(paginationBoxRef)
  const pageCount = Math.ceil(amountPages / rowPage);

  // console.log(pageCount)

  for (let i = 1; i <= pageCount; i += 1) {
    const paginationListItem = makePaginationBtn(i);
    paginationBoxRef.appendChild(paginationListItem);
  }
}

export function makePaginationBtn(page) {

    console.log("work")
    const paginationItem = document.createElement('li')
    paginationItem.innerText = page
    paginationItem.classList.add('pagination-list__item')

    paginationItem.addEventListener('click', (event) =>
    {
        requestData.page = page;
        event.currentTarget.classList.add("current");
        console.log("page twork", requestData.page);
        getServerData(requestTypes.TRENDING, requestData.page).then(movies => {
            renderMoviesMarkup(movies);
        })
    }
)

    return paginationItem
}



function newPagination(allPages, page) {
    const newPaginationBoxRef = document.querySelector('.new-pagination-list')
    console.log(newPaginationBoxRef)
    console.log("new pag")
    let li = '';
    let beforePages = page - 1;
    let afterPages = page + 1;
    let liActive;

    if (page > 1) {
        li += `<li class="pag-btn"><i class="fas left">стрелка</i></li>`
    }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength ++) {
        li += `<li class="pag-number pag-btn ${liActive}"><span>${pageLength}</span></li>`;

        if (page === pageLength) {
            liActive = 'active-pagin-page'
        } else {
            liActive = ''
        }
    }

    if (page < allPages) {
        li += `<li class="pag-btn"><i class="fas right">стрелка</i></li>`
    }


    newPaginationBoxRef.innerHTML = li

}

newPagination(10, 4)

