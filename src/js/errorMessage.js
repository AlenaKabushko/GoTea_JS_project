import { requestData, requestTypes } from './fetchUrl';
import { spinnerOff } from './spinner';

const messageErrorSearch =
  'Search result not successful. Enter the correct movie name and repeat';
const messageErrorFilter =
  'Search result not successful. Enter the correct filter and repeat';

export function setErrorMessage(message) {
  const messageControl = document.querySelector('.header__text-warning');
  if (messageControl) {
    messageControl.textContent = message;
    messageControl.classList.remove('visually-hidden');
  }
  spinnerOff();
}

export function setErrorNoData() {
  switch (requestData.request) {
    case requestTypes.TRENDING:
      setErrorMessage('No data');
      break;
    case requestTypes.DISCOVER:
      setErrorMessage(messageErrorFilter);
      break;
    case requestTypes.SEARCH:
      setErrorMessage(messageErrorSearch);
  }
}

export function clearErrorMessage() {
  const messageControl = document.querySelector('.header__text-warning');
  if (messageControl) {
    messageControl.classList.add('visually-hidden');
  }
}
