
const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('button[data-create]');
const destroyBtn = controls.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function createBoxes(amount) {
  destroyBoxes();

  let size = 30;
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = '5px';
    size += 10;

    elements.push(div);
  }

 boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value.trim());

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert('Please enter a number between 1 and 100.');
  }

  input.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);
