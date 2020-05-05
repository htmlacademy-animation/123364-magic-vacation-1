const introMessage = document.querySelector('.intro__message');
const MAIN = 'main';
const screens = [MAIN];

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

    default: {
      break;
    }
  }
};
