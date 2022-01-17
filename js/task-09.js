const changeColorBtn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color')
const body = document.querySelector('body')

changeColorBtn.addEventListener('click', changesBackgroundColorOfBody);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changesBackgroundColorOfBody(style) {
 body.style.backgroundColor = `${getRandomHexColor()}`;
 spanColor.textContent = `${body.style.backgroundColor}`;
  console.log(body.style.backgroundColor);
}


CSSStyleDeclaration.backgroundColor