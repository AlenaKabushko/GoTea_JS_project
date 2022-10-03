const buttonTopRef = document.querySelector('.button-top')

buttonTopRef.onclick = function () {
  window.scrollTo(scrollY, 0);
    };

window.addEventListener('scroll', function () {
      if (scrollY > document.documentElement.clientHeight) {
        buttonTopRef.classList.remove("visually-hidden")
      } else if (this.scrollY === 0) {
        buttonTopRef.classList.add("visually-hidden")
      }
    });


