AOS.init();

const aosArray = document.querySelectorAll('[data-aos]');
console.log(window.screen.availWidth);

function disableAos() {
  if (window.screen.availWidth <= 480) {
    aosArray.forEach(elem => elem.removeAttribute('data-aos'));
  }
}

disableAos();
