class Slider {
  constructor(container, settings) {
    this.slider = document.querySelector(container);
    this.track = this.slider.querySelector('.slider__track');
    this.btnPrev = this.slider.querySelector(settings.btnPrev);
    this.btnNext = this.slider.querySelector(settings.btnNext);

    this.slideCount = this.track.querySelectorAll('.slider__slide').length;
    this.slideWidth = this.track.clientWidth;

    this.currentSlide = 0;
  }

  changeTrackState() {
    this.track.style.transform = `translateX(${
      this.currentSlide * this.slideWidth * -1
    }px)`;
  }

  changeBtnState() {
    this.btnPrev.disabled = this.currentSlide === 0;
    this.btnNext.disabled = this.currentSlide === this.slideCount - 1;
  }

  initEventListeners() {
    this.btnPrev.addEventListener('click', () => this.btnClickHandler(true));
    this.btnNext.addEventListener('click', () => this.btnClickHandler());
    window.addEventListener('resize', this.windowResizeHandler.bind(this));
  }

  btnClickHandler(isPrev = false) {
    isPrev ? this.currentSlide-- : this.currentSlide++;
    this.changeBtnState();
    this.changeTrackState();
  }

  windowResizeHandler() {
    this.slideWidth = this.track.clientWidth;
    this.changeTrackState();
  }

  init() {
    this.initEventListeners();
    this.changeBtnState();
    this.changeTrackState();
  }
}

export default Slider;
