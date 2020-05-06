import historySliderAnimation from "./historySliderAnimation";

export default class PageAnimation {
  constructor() {
    this.screen = {
      main: 'main',
      history: 'history',
      award: 'award',
      rules: 'rules',
      game: 'game',
    }
    this.screens = Object.keys(this.screen);
    this.element = {
      mainIntroMessage: document.querySelector('.intro__message'),
      gameInput: document.querySelector('.form__field'),
    };
    this.initHandler = {
      [this.screen.main]: this.initMainScreen.bind(this),
      [this.screen.history]: this.initHistoryScreen.bind(this),
      [this.screen.game]: this.initGameScreen.bind(this),
    };
    this.destoryHandler = {
      [this.screen.main]: this.destroyMainScreen.bind(this),
      [this.screen.history]: this.destroyHistoryScreen.bind(this),
      [this.screen.game]: this.destroyGameScreen.bind(this),
    };
  }

  /**
   * @param {Number} activeScreen
   */
  init(activeScreen) {
    const handler = this.initHandler[this.screens[activeScreen]];

    handler && handler();
  }

  /**
   * @param {Number} activeScreen
   */
  destroy(activeScreen) {
    const handler = this.destoryHandler[this.screens[activeScreen]];

    handler && handler();
  }

  /**
   * Главная
   */
  initMainScreen() {
    requestAnimationFrame(() => {
      this.element.mainIntroMessage.classList.add('active');
    });
  }

  destroyMainScreen() {
    this.element.mainIntroMessage.classList.remove('active');
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
      this.element.gameInput.classList.add('active');
    });
  }

  destroyGameScreen() {
    this.element.gameInput.classList.remove('active');
  }
}
