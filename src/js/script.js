import init from './map.js';
import Slider from './Slider.js';

const slider = new Slider('.slider__container', {
  btnPrev: '.slider__btn--prev',
  btnNext: '.slider__btn--next',
});

ymaps.ready(init);
slider.init();
