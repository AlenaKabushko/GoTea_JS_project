const modalWindow = document.querySelector('.film-card');
const overlay = document.querySelector('.overlay');

function setGalleryClickListeners() {
  const filmCards = document.querySelectorAll('.films-gallery__item');
  filmCards.forEach(filmCard =>
    filmCard.addEventListener('click', onGalleryCardClick)
  );

  document.body.addEventListener(
    'keyup',
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        modalWindow.classList.remove('active');
        overlay.classList.remove('active');
        modalWindow.style.top = '50%';
      }
    },
    false
  );

  overlay.addEventListener('click', function () {
    modalWindow.classList.remove('active');
    this.classList.remove('active');
    modalWindow.style.top = '50%';
  });
}

function onGalleryCardClick(event) {
  event.preventDefault();

  const cardNode = event.currentTarget;

  if (window.matchMedia('(max-width: 768px)').matches) {
    modalWindow.style.top = window.pageYOffset + 'px';
  }

  modalWindow.classList.add('active');
  overlay.classList.add('active');
}

export { setGalleryClickListeners };
