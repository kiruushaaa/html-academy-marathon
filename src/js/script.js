import init from './map.js';
import Slider from './Slider.js';
import initToTop from './toTop.js';

const slider = new Slider('.reviews__inner', {
  btnPrev: '.reviews__btn--prev',
  btnNext: '.reviews__btn--next',
});

ymaps.ready(init);
slider.init();
initToTop('.to-top');
