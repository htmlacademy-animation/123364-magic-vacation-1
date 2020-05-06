let firstTextBlock;
let secondTextBlock;

const setSecondBlockAnimation = () => {
  requestAnimationFrame(() => {
    secondTextBlock && secondTextBlock.classList.add('active');
  });
};

export const initSlideAnimation = () => {
  firstTextBlock = document.querySelector('.swiper-slide-active .slider__item-text');
  secondTextBlock = document.querySelector('.swiper-slide-next .slider__item-text');

  if (firstTextBlock) {
    firstTextBlock.addEventListener('transitionend', setSecondBlockAnimation);

    requestAnimationFrame(() => {
      firstTextBlock.classList.add('active');
    });
  }
}

export const destroySlideAnimation = () => {
  firstTextBlock && firstTextBlock.removeEventListener('transitionend', setSecondBlockAnimation);

  firstTextBlock && firstTextBlock.classList.remove('active');
  secondTextBlock && secondTextBlock.classList.remove('active');

  firstTextBlock = null;
  secondTextBlock = null;
};
