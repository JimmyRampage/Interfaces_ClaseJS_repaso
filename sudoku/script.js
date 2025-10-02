let board = document.getElementById('board');
let controls = document.getElementById('controls');

// Create a 9x9 grid for the Sudoku board
let boardHTML = new Array(9).fill(new Array(9).fill(''))

boardHTML.forEach((row, i) => {
  row.forEach((_, j) => {
    let cellDiv = document.createElement('div');
    cellDiv.classList.add('cell');
    cellDiv.id = `cell-${i}-${j}`;
    if (i == 3 || i == 6) {
      cellDiv.style.borderTop = '2px solid black';
    }
    if (j == 3 || j == 6) {
      cellDiv.style.borderLeft = '2px solid black';
    }
    board.appendChild(cellDiv);
  });
});

let controlsHTML = new Array(9).fill('');

controlsHTML.forEach((_, i) => {
  let button = document.createElement('button');
  button.innerText = i + 1;
  button.classList.add('number-button');
  button.id = `button-${i}`;
  controls.appendChild(button);
});