// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const bodyEl = document.querySelector('body');
// const changeColoBtn = document.querySelector('.change-color');
// const textColorValue = document.querySelector('color');

// changeColorBtn.addEventListener('click', changeColor);

// function changeColor() {
//   bodyEl.style.backgroundColor = getRandomHexColor;
// }



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeButton = document.querySelector('button.change-color')
const body = document.querySelector('body')
const colorValue = document.querySelector('span.color')


changeButton.addEventListener('click', e => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
})
