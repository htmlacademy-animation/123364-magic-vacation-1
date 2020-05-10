export default () => {
  let header = document.querySelector(`.js-header`);
  let menuToggler = document.querySelector(`.js-menu-toggler`);
  let menuLinks = document.querySelectorAll(`.js-menu-link`);

  if (menuToggler) {
    menuToggler.addEventListener(`click`, function () {
      if (header.classList.contains(`page-header--menu-opened`)) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      } else {
        header.classList.add(`page-header--menu-opened`);
        document.body.classList.add(`menu-opened`);
      }
    });
  }

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener(`click`, function () {
      if (window.innerWidth < 1025) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      }
    });

    const removeAllClasses = (el) => {
      el.classList.remove(`js-menu-link--enter`);
      el.classList.remove(`js-menu-link--enter-active`);
      el.classList.remove(`js-menu-link--enter-done`);
      el.classList.remove(`js-menu-link--exit`);
      el.classList.remove(`js-menu-link--exit-active`);
      el.classList.remove(`js-menu-link--exit-done`);
    };

    const handleEnterTransitionEnd = () => {
      menuLinks[i].classList.add(`js-menu-link--enter-done`);
      menuLinks[i].classList.remove(`js-menu-link--enter`);
      menuLinks[i].classList.remove(`js-menu-link--enter-active`);
      menuLinks[i].removeEventListener(`transitionend`, handleEnterTransitionEnd);
    };

    const handleExitTransitionEnd = () => {
      menuLinks[i].classList.remove(`js-menu-link--exit`);
      menuLinks[i].classList.remove(`js-menu-link--exit-active`);
      menuLinks[i].removeEventListener(`transitionend`, handleEnterTransitionEnd);
    };

    const handleEnter = () => {
      if (menuLinks[i].classList.contains(`active`)) {
        return;
      }

      menuLinks[i].addEventListener(`transitionend`, handleEnterTransitionEnd);
      removeAllClasses(menuLinks[i]);
      menuLinks[i].classList.add(`js-menu-link--enter`);
      menuLinks[i].classList.add(`js-menu-link--enter-active`);
    };

    const handleExit = () => {
      if (menuLinks[i].classList.contains(`active`)) {
        return;
      }

      menuLinks[i].addEventListener(`transitionend`, handleExitTransitionEnd);
      removeAllClasses(menuLinks[i]);
      menuLinks[i].classList.add(`js-menu-link--exit`);
      menuLinks[i].classList.add(`js-menu-link--exit-active`);
    };

    menuLinks[i].addEventListener(`mouseover`, handleEnter);
    menuLinks[i].addEventListener(`focus`, handleEnter);
    menuLinks[i].addEventListener(`mouseleave`, handleExit);
    menuLinks[i].addEventListener(`blur`, handleExit);
  }
};
