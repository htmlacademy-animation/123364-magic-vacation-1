let firstTextBlock;
let secondTextBlock;

const setSecondBlockAnimation = () => {
  requestAnimationFrame(() => {
    if (secondTextBlock) {
      secondTextBlock.classList.add(`active`);
    }
  });
};

const init = () => {
  firstTextBlock = document.querySelector(`.swiper-slide-active .slider__item-text`);
  secondTextBlock = document.querySelector(`.swiper-slide-next .slider__item-text`);

  if (firstTextBlock) {
    firstTextBlock.addEventListener(`transitionend`, setSecondBlockAnimation);

    requestAnimationFrame(() => {
      firstTextBlock.classList.add(`active`);
    });
  }
};

const destroy = () => {
  if (firstTextBlock) {
    firstTextBlock.removeEventListener(`transitionend`, setSecondBlockAnimation);
    firstTextBlock.classList.remove(`active`);
  }

  if (secondTextBlock) {
    secondTextBlock.classList.remove(`active`);
  }

  firstTextBlock = null;
  secondTextBlock = null;
};

export default {
  init,
  destroy,
};
