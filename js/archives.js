'use strict';

const listEl = document.querySelector('.arch-list');

listEl.addEventListener('click', onLinkClick);

function onLinkClick(e) {
  if (e.target.classList.contains('arch-link') !== true) {
    return;
  }

  e.preventDefault();
  const divElems = document.querySelectorAll('.js-year');

  divElems.forEach(elem => {
    elem.setAttribute('hidden', true);

    if (elem.classList.contains(e.target.textContent) === true) {
      elem.removeAttribute('hidden');
    }
  });
}
