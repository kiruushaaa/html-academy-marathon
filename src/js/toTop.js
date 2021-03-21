const initToTop = (selector) => {
  const btnToTop = document.querySelector(selector);
  const btnClass = selector.slice(1);

  const windowResizeHandler = () => {
    window.scrollY < 700
      ? btnToTop.classList.remove(`${btnClass}--showed`)
      : btnToTop.classList.add(`${btnClass}--showed`);
  };

  const btnClickHandler = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', windowResizeHandler);
  btnToTop.addEventListener('click', btnClickHandler);
};

export default initToTop;
