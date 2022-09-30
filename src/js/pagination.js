import { renderMoviesMarkup, requestData, requestTypes, getNextServerData, getServerData } from "./fetchUrl";

export function makePagination(amountPages, rowPage) {
    const paginationBoxRef = document.querySelector('.pagination')
    console.log(paginationBoxRef)
    const pageCount = Math.ceil(amountPages / rowPage)
    
    console.log(pageCount)

    for (let i = 1; i <= pageCount; i += 1) {
        const paginationListItem = makePaginationBtn(i);
        paginationBoxRef.appendChild(paginationListItem)
    }

}


export function makePaginationBtn(page) {
    console.log("work")
    const paginationItem = document.createElement('li')
    paginationItem.innerText = page
    paginationItem.classList.add('pagination-list__item')

    paginationItem.addEventListener('click', () =>
    {
        requestData.page = page;
        console.log("page twork", requestData.page);
        getServerData(requestTypes.TRENDING, requestData.page).then(movies => {
            renderMoviesMarkup(movies);
        })
    }
)

    return paginationItem
}




