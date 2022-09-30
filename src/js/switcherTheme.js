import { load, save, } from './localstorage';
const switchButton = document.querySelector('.header__button-fon');
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');
const fonField = document.querySelector('main .container');

const themeToLS = load('theme') ? load('theme') : 'day';
save('theme', themeToLS);

fonField.classList.add(themeToLS);
if (themeToLS === 'day') {
    sunIcon.style.visibility = 'hidden';
} else {
    moonIcon.style.visibility = 'hidden';
}


switchButton.addEventListener('click', () => {
    const valueLS = load('theme');
    if (valueLS === 'day') {
        fonField.classList.remove('day');
        fonField.classList.add('night');
        moonIcon.style.visibility = 'hidden';
        sunIcon.style.visibility = 'visible';
        save('theme', 'night');
    } else {
        fonField.classList.remove('night');
        fonField.classList.add('day');
        sunIcon.style.visibility = 'hidden';
        moonIcon.style.visibility = 'visible';
        save('theme', 'day');
    }
});

