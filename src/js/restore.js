import { requestData, requestTypes, getNextServerData } from './fetchUrl.js';
import { setOption, getOption, getMultiOption } from './select.js';
import { save, load } from './localstorage';
import { config } from './start';
const nameConfig = 'config';

export function saveConfig(classGenres, classYears) {
  console.log('config', config);
  const selectorYears = document.querySelector(`.custom-select.${classYears}`);
  if (selectorYears !== null) {
    config.requestData = requestData;
    config.genres = getMultiOption(classGenres);
    config.years = selectorYears.querySelector('.select-selected').textContent;
    save(nameConfig, config);
  }
}

export function restoreConfig(classGenres, classYears) {
  config = load(nameConfig);
  if (config) {
    requestData = config.requestData;
    console.log('requestData', requestData);
  } else {
    saveConfig(classGenres, classYears);
  }
}
