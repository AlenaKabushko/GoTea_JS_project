export function createCustomOneSelect() {
  /*look for any elements with the class "custom-select":*/
  const customSelect = document.getElementsByClassName('custom-select');
  const lenCustomSelect = customSelect.length;
  for (let i = 0; i < lenCustomSelect; i++) {
    const selElmnt = customSelect[i].getElementsByTagName('select')[0];
    const lenSelElmnt = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    const divElementSelect = document.createElement('DIV');
    divElementSelect.setAttribute('class', 'select-selected');
    divElementSelect.innerHTML =
      selElmnt.options[selElmnt.selectedIndex].innerHTML;
    customSelect[i].appendChild(divElementSelect);
    /*for each element, create a new DIV that will contain the option list:*/
    const divElementSelectItems = document.createElement('DIV');
    divElementSelectItems.setAttribute('class', 'select-items select-hide');
    selElmnt.selectedIndex = 0;
    for (let j = 1; j < lenSelElmnt; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      const divElementOption = document.createElement('DIV');
      divElementOption.innerHTML = selElmnt.options[j].innerHTML;
      if (j === 1) {
        divElementOption.setAttribute('class', 'same-as-selected');
      }

      /*when an item is clicked, update the original select box,
          and the selected item:*/
      divElementOption.addEventListener('click', function (e) {
        const previousSibling = this.parentNode.previousSibling;
        for (let i = 0; i < lenSelElmnt; i++) {
          if (selElmnt.options[i].innerHTML === this.innerHTML) {
            selElmnt.selectedIndex = i;
            previousSibling.innerHTML =
              this.innerHTML === 'None' ? 'Year' : this.innerHTML;
            const elementSameAsSelected =
              this.parentNode.getElementsByClassName('same-as-selected');
            const lenElementSameAsSelected = elementSameAsSelected.length;
            for (let k = 0; k < lenElementSameAsSelected; k++) {
              elementSameAsSelected[k].removeAttribute('class');
            }
            this.setAttribute('class', 'same-as-selected');
            break;
          }
        }
        previousSibling.click();
      });
      divElementSelectItems.appendChild(divElementOption);
    }

    customSelect[i].appendChild(divElementSelectItems);

    /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
    divElementSelect.addEventListener('click', function (e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle('select-hide');
      this.classList.toggle('select-arrow-active');
    });
  }
}
/*a function that will close all select boxes in the document,
    except the current select box:*/
function closeAllSelect(elmnt) {
  let arrNo = [];
  const elementSelectItems = document.getElementsByClassName('select-items');
  const elementSelectSelected =
    document.getElementsByClassName('select-selected');
  const lenElementSelectItems = elementSelectItems.length;
  const lenElementSelectSelected = elementSelectSelected.length;
  for (let i = 0; i < lenElementSelectSelected; i++) {
    if (elmnt == elementSelectSelected[i]) {
      arrNo.push(i);
    } else {
      elementSelectSelected[i].classList.remove('select-arrow-active');
    }
  }
  for (let i = 0; i < lenElementSelectItems; i++) {
    if (arrNo.indexOf(i)) {
      elementSelectItems[i].classList.add('select-hide');
    }
  }
}

//----------------------
export function setOption(classSelect, option) {
  const select = document.querySelector(`.custom-select.${classSelect}`);
  const selElmnt = select.getElementsByTagName('select')[0];
  const lenSelElmnt = selElmnt.length;
  const selectSelected = select.querySelector('.select-selected');
  const selectItems = select.querySelector('.select-items');

  selElmnt.selectedIndex = option;
  selectSelected.innerHTML = selElmnt.options[option + 1].innerHTML;
  const elementSameAsSelected =
    selectItems.getElementsByClassName('same-as-selected');
  const lenElementSameAsSelected = elementSameAsSelected.length;
  for (let k = 0; k < lenElementSameAsSelected; k++) {
    elementSameAsSelected[k].removeAttribute('class');
  }
  selectItems.childNodes[option].setAttribute('class', 'same-as-selected');
}

//----------------------
export function getOption(classSelect) {
  const textSelect = document
    .querySelector(`.custom-select.${classSelect}`)
    .querySelector('.select-selected');
  switch (textSelect.textContent) {
    case 'Year':
      return '';
    case '2022':
      return '&primary_release_date.gte=2022-01-01';
    case '2021':
      return '&primary_release_year=2021';
    case '2020':
      return '&primary_release_year=2020';
    case '2016-19':
      return '&primary_release_date.gte=2016-01-01&primary_release_date.lte=2019-12-31';
    case '2010-15':
      return '&primary_release_date.gte=2010-01-01&primary_release_date.lte=2015-12-31';
    case '2000s':
      return '&primary_release_date.gte=2000-01-01&primary_release_date.lte=2009-12-31';
    case '1990s':
      return '&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31';
    case '1980s':
      return '&primary_release_date.gte=1980-01-01&primary_release_date.lte=1989-12-31';
    case '1970s':
      return '&primary_release_date.gte=1970-01-01&primary_release_date.lte=1979-12-31';
    case '1960s':
      return '&primary_release_date.lte=1969-12-31';
  }
}

//------------------------------------------------
export function createCustomMultiSelect() {
  /*look for any elements with the class "custom-multi-select":*/
  const customSelect = document.getElementsByClassName('custom-multi-select');
  const lenCustomSelect = customSelect.length;
  for (let i = 0; i < lenCustomSelect; i++) {
    const selElmnt = customSelect[i].getElementsByTagName('select')[0];
    const lenSelElmnt = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    const divElementSelect = document.createElement('DIV');
    divElementSelect.setAttribute('class', 'select-selected');
    divElementSelect.innerHTML = selElmnt.options[0].innerHTML;
    customSelect[i].appendChild(divElementSelect);
    /*for each element, create a new DIV that will contain the option list:*/
    const divElementSelectItems = document.createElement('DIV');
    divElementSelectItems.setAttribute('class', 'select-items select-hide');
    selElmnt.array = [];
    selElmnt.array.push(0); /*count of selected nonzero options*/
    for (let j = 1; j < lenSelElmnt; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      const divElementOption = document.createElement('DIV');
      divElementOption.innerHTML = selElmnt.options[j].innerHTML;
      if (j === 1) {
        selElmnt.array.push(1); /*None*/
        divElementOption.setAttribute('class', 'same-as-selected');
      } else {
        selElmnt.array.push(0);
      }

      /*when an item is clicked, update the original select box,
          and the selected item:*/
      divElementOption.addEventListener('click', function (e) {
        const previousSibling = this.parentNode.previousSibling;
        for (let i = 1; i < lenSelElmnt; i++) {
          if (selElmnt.options[i].innerHTML === this.innerHTML) {
            if (i === 1) {
              if (!selElmnt.array[1]) {
                selElmnt.array[1] = 1;
                selElmnt.array[0] = 0;
                divElementSelectItems.childNodes[0].setAttribute(
                  'class',
                  'same-as-selected'
                );
              }
              for (let i = 2; i < lenSelElmnt; i++) {
                if (selElmnt.array[i]) {
                  divElementSelectItems.childNodes[i - 1].removeAttribute(
                    'class'
                  );
                  selElmnt.array[i] = 0;
                }
              }
            } else {
              if (selElmnt.array[1]) {
                divElementSelectItems.childNodes[0].removeAttribute('class');
                selElmnt.array[1] = 0;
              }
              selElmnt.array[i] = 1 - selElmnt.array[i];
              if (selElmnt.array[i]) {
                selElmnt.array[0] += 1;
                divElementSelectItems.childNodes[i - 1].setAttribute(
                  'class',
                  'same-as-selected'
                );
              } else {
                selElmnt.array[0] -= 1;
                divElementSelectItems.childNodes[i - 1].removeAttribute(
                  'class'
                );
              }
              if (selElmnt.array[0] === 0) {
                selElmnt.array[1] = 1;
                divElementSelectItems.childNodes[0].setAttribute(
                  'class',
                  'same-as-selected'
                );
              }
            }
            previousSibling.innerHTML = getMultiString(selElmnt, lenSelElmnt);
            break;
          }
        }
      });
      divElementSelectItems.appendChild(divElementOption);
    }

    customSelect[i].appendChild(divElementSelectItems);

    /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
    divElementSelect.addEventListener('click', function (e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.remove('select-hide');
      this.classList.add('select-arrow-active');
    });
  }
}

function getMultiString(selElmnt, lenSelElmnt) {
  if (selElmnt.array[0] === 0) {
    return 'Genres';
  } else {
    let name = '';
    for (let i = 2; i < lenSelElmnt; i += 1) {
      if (selElmnt.array[i]) {
        name = selElmnt.options[i].innerHTML;
        break;
      }
    }
    if (selElmnt.array[0] === 1) {
      return name;
    }
    return `${name}, +${selElmnt.array[0] - 1}`;
  }
}

export function getMultiOption(classSelect) {
  const multiSelect = document.querySelector(
    `.custom-multi-select.${classSelect}`
  );
  const selElmnt = multiSelect.getElementsByTagName('select')[0];
  let options = '';
  if (selElmnt.array[0] !== 0) {
    for (let i = 2; i < selElmnt.length; i += 1) {
      if (selElmnt.array[i]) {
        if (options !== '') {
          options += ',';
        }
        options += selElmnt.options[i].value;
      }
    }
  }
  return options;
}

/*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
document.addEventListener('click', closeAllSelect);
