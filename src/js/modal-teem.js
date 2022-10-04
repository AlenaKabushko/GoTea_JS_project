const open = document.querySelector(".footer-btn");
const close = document.querySelector(".team-modal__btn--close");
const modal = document.querySelector("[data-modal-teem]");
const modals = document.querySelector(".teem-modal");
const bcgdop = document.querySelector(".backdrop");

open.addEventListener("click", teemModal);
close.addEventListener("click", teemModal);
modal.addEventListener("click", closeModal);

document.addEventListener('keydown', (evt) => {
        if (evt.code === "Escape") {
          closeModal();
        }
    });

function teemModal() {
    modal.classList.toggle("visually-hidden");
    modals.classList.toggle("visually-hidden"); 
}

function closeModal() {
  modal.classList.add("visually-hidden");
  modals.classList.add("visually-hidden");
}  

