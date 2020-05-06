import { initSlideAnimation, destroySlideAnimation } from "./historySliderAnimation";

const introMessage = document.querySelector('.intro__message');
const MAIN = 'main';
const HISTORY = 'history';
const screens = [MAIN, HISTORY];

/**
 * @param {Number} activeScreen
 */
export const initPageAnimation = (activeScreen) => {
  switch (screens[activeScreen]) {
    case MAIN: {
      requestAnimationFrame(() => {
        introMessage.classList.add('active');
      });

      break;
    }

    case HISTORY: {
      initSlideAnimation();

      break;
    }

    default: {
      break;
    }
  }
}

/**
 * @param {Number} activeScreen
 */
export const destroyPageAnimation = (activeScreen) => {
  switch (screens[activeScreen]) {
    case MAIN: {
      introMessage.classList.remove('active');

      break;
    }

    case HISTORY: {
      destroySlideAnimation();

      break;
    }

    default: {
      break;
    }
  }
};
