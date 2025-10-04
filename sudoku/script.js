'use strict'

let board = document.getElementById('board');
let controls = document.getElementById('controls');

// Create globals
let boardHTML = new Array(9).fill(new Array(9).fill('')); // Array for cells
let controlsHTML = new Array(9).fill(''); // Array for buttons
let selectedCell = null; // null for no selection, otherwise target

// Create cells
boardHTML.forEach((row, i) => {
  row.forEach((_, j) => {
    let cellDiv = document.createElement('div');
    // Calculate quadrant
    const quadrantRow = Math.floor(i / 3); // 0, 0, 0, 1, 1, 1, 2, 2, 2
    const quadrantCol = Math.floor(j / 3);
    const quadrantNumber = (quadrantRow * 3) + quadrantCol + 1;
    // Add clases and id
    cellDiv.classList.add('cell', `quadrant-${quadrantNumber}`);
    cellDiv.id = `${i}-${j}`;
    if (i == 3 || i == 6) cellDiv.style.borderTop = '2px solid black';
    if (j == 3 || j == 6) cellDiv.style.borderLeft = '2px solid black';
    // listeners
    cellDiv.tabIndex = 0; // tabIndex allows to select the HTMLElement
    cellDiv.addEventListener('focus', (e) => {
      selectedCell = e.target;
      let [row, col] = e.target.id.split('-');
      console.log(row, col);
      selectedCellRowCol(row, col, 'lightblue');
      cellDiv.style.backgroundColor = 'blue';
    })
    cellDiv.addEventListener('blur', (e) => {
      let [row, col] = e.target.id.split('-');
      selectedCellRowCol(row, col);
      cellDiv.style.backgroundColor = '';
      selectedCell = null;
    })
    board.appendChild(cellDiv);
  });
});

// highlight rows and cols
const selectedCellRowCol = (x, y, color='') => {
  boardHTML.forEach((row, i) => {
    row.forEach((_, j) => {
      if (i == x || j == y){
        let cell = document.getElementById(`${i}-${j}`);
        cell.style.backgroundColor = color;
      }
    })
  })
}

// Create number buttons
controlsHTML.forEach((_, i) => {
  let button = document.createElement('button');
  button.innerText = i + 1;
  button.classList.add('number-button');
  button.id = `button-${i}`;
  button.value = i + 1;
  controls.appendChild(button);
});

// Buttons logic
controlsHTML.forEach((_, i) => {
  let button = document.getElementById(`button-${i}`);
  button.addEventListener('click', (e) => {
    // If there's no selected cell, do nothing.
    if (!selectedCell) return;
    if (selectedCell.innerText == e.target.value){
      selectedCell.innerText = '';
    } else {
      selectedCell.innerText = e.target.value;
    }
  });
  // Prevent the button from taking focus away from the cell
  button.addEventListener('mousedown', (e) => {
    e.preventDefault();
  });
});