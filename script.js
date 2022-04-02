

const container = document.querySelector('#container');

for (let i = 0; i < 255; i++) {
  let div = document.createElement('div');
  div.classList.add('square');
  container.appendChild(div);
}

let squares = document.querySelectorAll('.square');
for (let square of squares) {
  square.addEventListener('click', () => {
    square.style.backgroundColor = 'black';
  })
}

const btnClear = document.querySelector('#btn-clear');
btnClear.addEventListener('click', () => {
  for (let square of squares) {
    container.removeChild(square);
  }

  let grid = prompt('Enter a number for the squares per side');
  let width = 960 / grid;

  for (let i = 0; i < grid * grid - 1; i++) {
    let div = document.createElement('div')
    div.classList.add('square');
    div.style.width = `${width}px`;
    container.appendChild(div);
  }
  squares = document.querySelectorAll('.square');
  for (let square of squares) {
    square.addEventListener('click', () => {
      square.style.backgroundColor = 'black';
    })
  }
})