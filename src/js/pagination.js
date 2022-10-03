class Pagination {
  #currentPage;
  #totalPages;

  constructor(parent, option) {
    const { countPoint, stepInterval, totalPages, onShow, render } = option;

    this.parent = parent;
    this.#currentPage = 1;
    this.countPoint = countPoint;
    this.stepInterval = stepInterval || countPoint;
    this.#totalPages = totalPages;

    this.useInterval = true;

    this.onShow = onShow;
    this.render = render || renderPagination;

    this.render(
      this.parent,
      this.currentPage,
      this.#totalPages,
      this.countPoint,
      this.useInterval
    );
    this.parent.addEventListener('click', this._handlerOnClick.bind(this));
  }

  _handlerOnClick(e) {
    e.preventDefault();

    const usedKey = Object.keys(e.target.dataset);

    if (usedKey.includes('action')) {
      this[e.target.dataset['action']]();
    }

    if (usedKey.includes('index')) {
      this.moveToPage(parseInt(e.target.dataset['index']));
    }
  }

  moveToPage(page) {
    //if (this.currentPage != page) {
    this.currentPage = page;
    this.render(
      this.parent,
      this.currentPage,
      this.#totalPages,
      this.countPoint,
      this.useInterval
    );
    this.onShow(this.currentPage);
    //}
  }

  set currentPage(newPage) {
    this.#currentPage = newPage;
  }

  get currentPage() {
    return this.#currentPage;
  }

  setTotalPages(totalPages) {
    this.#totalPages = totalPages;
    renderPagination(
      this.parent,
      this.currentPage,
      this.#totalPages,
      this.countPoint,
      this.useInterval
    );
  }

  nextPage() {
    if (this.currentPage + 1 <= this.#totalPages) {
      this.moveToPage(this.currentPage + 1);
    }
  }

  nextInterval() {
    if (this.currentPage + this.countPoint <= this.#totalPages) {
      this.moveToPage(this.currentPage + this.countPoint);
    }
  }

  previosPage() {
    if (this.#currentPage - 1) {
      this.moveToPage(this.currentPage - 1);
    }
  }

  previosInterval() {
    if (this.currentPage - this.countPoint > 0) {
      this.moveToPage(this.currentPage - this.countPoint);
    }
  }
}

function renderPagination(parent, page, totalPages, countPoint, useInterval) {
  const isOffset = totalPages > countPoint;
  const rr = Math.ceil(countPoint / 2);

  const exclusive = useInterval && totalPages - countPoint === 2;

  let offset = useInterval ? 1 : 0;
  if (page > totalPages - countPoint && totalPages - countPoint > 0) {
    offset = totalPages - countPoint - 1 * exclusive;
  } else if (page > (useInterval ? countPoint : rr) && page < totalPages - rr) {
    offset = page - rr - 1 * exclusive;
  }

  let lCountPoint = countPoint;
  if (totalPages < countPoint) {
    lCountPoint = totalPages - (1 * useInterval ? 1 : 0);
  } else if (page <= countPoint || page > totalPages - countPoint) {
    lCountPoint = countPoint - (1 * useInterval ? 1 : 0) + 1 * exclusive;
  }

  const markup = Array.from({ length: lCountPoint }, (v, k) => k + (1 + offset))
    .map(
      el =>
        `<a class="pagination__number ${
          page === el ? 'active' : ''
        }" data-index = ${el}">${el}</a>`
    )
    .join('');

  parent.innerHTML = `<a class="pagination__arrow pagination__arrow--left materials-icons" data-action="previosPage">&larr;</a>
                        ${
                          useInterval
                            ? `<a class="pagination__number ${
                                page === 1
                                  ? 'active'
                                  : page <= countPoint
                                  ? ''
                                  : 'display-none'
                              }" data-index = ${1}">1</>`
                            : ''
                        }
                        ${
                          useInterval &&
                          isOffset &&
                          !exclusive &&
                          page > countPoint
                            ? '<a class="pagination__number display-none" data-action="previosInterval">...</a>'
                            : ''
                        }
                        ${markup}
                        ${
                          useInterval &&
                          isOffset &&
                          !exclusive &&
                          page < totalPages - countPoint + 1
                            ? `<a class="pagination__number display-none" data-action="nextInterval">...</a>`
                            : ''
                        }
                        ${
                          useInterval && isOffset && totalPages > countPoint
                            ? `<a class="pagination__number ${
                                page === totalPages
                                  ? 'active'
                                  : page > totalPages - countPoint
                                  ? ''
                                  : 'display-none'
                              }" data-index = ${totalPages}">${totalPages}</a>`
                            : ''
                        }
                        <a class="pagination__arrow pagination__arrow--right materials-icons" data-action="nextPage">&rarr;</a>`;
}

export { Pagination };
