const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
  let div = document.createElement('div');
  div.classList.add('square');
  container.appendChild(div);
}

const squares = document.querySelectorAll('.square');
for (let square of squares) {
  square.addEventListener('click', () => {
    square.style.backgroundColor = 'black';
  })
}