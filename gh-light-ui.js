'use strict';

function lightUI() {
  setTimeout(function() {
    document.querySelector('.header').style['background-color'] = 'white';
    document.querySelector('.header-logo-invertocat').style['background-color'] = '#4078c0';
    document.querySelector('.header-search-scope').style.color = 'black';

    var cl = document.querySelector('.header-search-input').classList;
    for(var i = 0; i < cl.length; i++){
      if (cl[i] !== 'form-control') {
        cl.remove(cl[i]);
      }
    }

    var el = document.querySelectorAll('.header-nav-link');
    for(i = 0; i < el.length; i++) {
      el[i].style.color = 'black';
    }
  }, 1);
}

window.onload = lightUI();
