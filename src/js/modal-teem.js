(() => {
const open = document.querySelector(".footer-btn");
  const close = document.querySelector(".team-modal__btn--close");
   const modal = document.querySelector("[data-modal-teem]");
  const modals = document.querySelector(".teem-modal");
open.addEventListener("click", teemModal);
close.addEventListener("click", teemModal);

  function teemModal() {
    modal.classList.toggle("visually-hidden");
    modals.classList.toggle("visually-hidden");
    
  
  }
   modal.addEventListener('keydown', (evt) => {
        if (evt.code === 'Escape') {
            instance.close();
        }
    });
})();