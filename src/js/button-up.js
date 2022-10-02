const buttonTopRef = document.querySelector('.button-top')

buttonTopRef.onclick = function () {
      window.scrollTo(scrollY, 0);
    };

    window.addEventListener('scroll', function() {
        buttonTopRef.hidden = (scrollY < document.documentElement.clientHeight);
    });


