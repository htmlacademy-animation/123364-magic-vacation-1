const createElement = (char) => {
  const span = document.createElement(`span`);

  span.textContent = char;

  return span;
};

export const breakWord = (element) => {
  if (!element || element.querySelector(`span`)) {
    return;
  }
  const text = element.textContent.trim().split(` `).filter((character) => character !== ``);
  const content = text.reduce((fragmentParent, word) => {
    const wordElement = Array.from(word).reduce((fragment, character) => {
      fragment.appendChild(createElement(character));
      return fragment;
    }, document.createDocumentFragment());
    const wordContainer = document.createElement(`span`);
    wordContainer.classList.add(`text__word`);
    wordContainer.appendChild(wordElement);
    fragmentParent.appendChild(wordContainer);
    return fragmentParent;
  }, document.createDocumentFragment());

  element.innerHTML = ``;
  element.appendChild(content);
};
