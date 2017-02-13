'use strict';

function lightUI() {
  setTimeout(function() {
    document.querySelector('.header').classList.remove('header-dark');
  }, 1);
}

window.onload = lightUI();
