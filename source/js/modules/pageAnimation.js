import historySliderAnimation from "./historySliderAnimation";

export default class PageAnimation {
  constructor() {
    this.screen = {
      main: `main`,
      history: `history`,
      award: `award`,
      rules: `rules`,
      game: `game`,
    };
    this.screens = Object.keys(this.screen);
    this.element = {
      mainIntroMessage: document.querySelector(`.intro__message`),
      gameInput: document.querySelector(`.form__field`),
      rulesLastListItem: document.querySelector(`.rules__item:last-child`),
      rulesButton: document.querySelector(`.rules__link`),
    };
    this.initHandler = {
      [this.screen.main]: this.initMainScreen.bind(this),
      [this.screen.history]: this.initHistoryScreen.bind(this),
      [this.screen.game]: this.initGameScreen.bind(this),
      [this.screen.rules]: this.initRulesScreen.bind(this),
    };
    this.destoryHandler = {
      [this.screen.main]: this.destroyMainScreen.bind(this),
      [this.screen.history]: this.destroyHistoryScreen.bind(this),
      [this.screen.game]: this.destroyGameScreen.bind(this),
      [this.screen.rules]: this.destroyRulesScreen.bind(this),
    };
  }

  /**
   * @param {Number} activeScreen
   */
  init(activeScreen) {
    const handler = this.initHandler[this.screens[activeScreen]];

    if (handler) {
      handler();
    }

    const isAwardScreen = this.screens[activeScreen] === this.screen.award;

    document.documentElement.style.setProperty(`--screen-overlay`, isAwardScreen ? 1 : 0);
  }

  /**
   * @param {Number} activeScreen
   */
  destroy(activeScreen) {
    const handler = this.destoryHandler[this.screens[activeScreen]];

    if (handler) {
      handler();
    }
  }

  /**
   * Главная
   */
  initMainScreen() {
    requestAnimationFrame(() => {
      this.element.mainIntroMessage.classList.add(`active`);
    });
  }

  destroyMainScreen() {
    this.element.mainIntroMessage.classList.remove(`active`);
  }

  /**
   * История
   */
  initHistoryScreen() {
    historySliderAnimation.init();
  }

  destroyHistoryScreen() {
    historySliderAnimation.destroy();
  }

  /**
   * Игра
   */
  initGameScreen() {
    requestAnimationFrame(() => {
      this.element.gameInput.classList.add(`active`);
    });
  }

  destroyGameScreen() {
    this.element.gameInput.classList.remove(`active`);
  }

  setRulesButtonAnimation() {
    this.element.rulesButton.classList.add(`animation`);
  }

  /**
   * Правила
   */
  initRulesScreen() {
    requestAnimationFrame(() => {
      this.element.rulesLastListItem.addEventListener(`animationend`, this.setRulesButtonAnimation.bind(this));
    });
  }

  destroyRulesScreen() {
    this.element.rulesLastListItem.removeEventListener(`animationend`, this.setRulesButtonAnimation.bind(this));
  }
}
