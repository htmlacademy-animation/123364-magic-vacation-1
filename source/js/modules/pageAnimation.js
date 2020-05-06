import { initSlideAnimation, destroySlideAnimation } from "./historySliderAnimation";

const introMessage = document.querySelector('.intro__message');
const gameInput = document.querySelector('.form__field');
const MAIN = 'main';
const HISTORY = 'history';
const AWARD = 'award';
const RULES = 'rules';
const GAME = 'game';
const screens = [MAIN, HISTORY, AWARD, RULES, GAME];

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

    case GAME: {
      requestAnimationFrame(() => {
        gameInput.classList.add('active');
      });

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

    case GAME: {
      gameInput.classList.remove('active');

      break;
    }

    default: {
      break;
    }
  }
};
