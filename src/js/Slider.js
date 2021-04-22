class Slider {
  constructor(container, settings) {
    this._slider = document.querySelector(container);
    this._track = this._slider.querySelector('.slider__track');
    this._btnPrev = this._slider.querySelector(settings.btnPrev);
    this._btnNext = this._slider.querySelector(settings.btnNext);
    this._slidesCount = this._track.querySelectorAll('.slider__slide').length;
    this._slideWidth = this._track.clientWidth;
    this._currentSlideNumber = 0;
  }

  getSlideWidth() {
    return this._slideWidth;
  }

  getCurrentSlideNumber() {
    return this._currentSlideNumber;
  }

  setSlideWidth(width) {
    this._slideWidth = width;
  }

  setCurrentSlideNumber(number) {
    this._currentSlideNumber = number;
  }

  _changeTrackPosition() {
    this._track.style.transform = `translateX(${
      this._currentSlideNumber * this._slideWidth * -1
    }px)`;
  }

  _changeBtnState() {
    this._btnPrev.disabled = this._currentSlideNumber === 0;
    this._btnNext.disabled = this._currentSlideNumber === this._slidesCount - 1;
  }

  _btnClickHandler(isPrev = false) {
    isPrev ? this.prevSlide() : this.nextSlide();
    this._changeBtnState();
    this._changeTrackPosition();
  }

  _windowResizeHandler() {
    this._slideWidth = this._track.clientWidth;
    this._changeTrackPosition();
  }

  prevSlide() {
    this.setCurrentSlideNumber(this.getCurrentSlideNumber() - 1);
  }

  nextSlide() {
    this.setCurrentSlideNumber(this.getCurrentSlideNumber() + 1);
  }

  initEventListeners() {
    this._btnPrev.addEventListener('click', () => this._btnClickHandler(true));
    this._btnNext.addEventListener('click', () => this._btnClickHandler());
    window.addEventListener('resize', this._windowResizeHandler.bind(this));
  }

  removeEventListeners() {
    this._btnPrev.removeEventListener('click', () =>
      this._btnClickHandler(true)
    );
    this._btnNext.removeEventListener('click', () => this._btnClickHandler());
    window.removeEventListener('resize', this._windowResizeHandler.bind(this));
  }

  init() {
    this.initEventListeners();
    this._changeBtnState();
    this._changeTrackPosition();
  }
}

export default Slider;
