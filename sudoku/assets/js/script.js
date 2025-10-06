'use strict'

import { createSudoku } from "./boardMaker.js";

// Selectores
const board = document.getElementById('board');
const controls = document.getElementById('controls');
const reset = document.getElementById('reset');
const mode = document.getElementById('mode');

// Create globals
const boardHTML = Array.from({ length: 9 }, () => new Array(9).fill('')); // New way to create the matrix
const controlsHTML = new Array(9).fill(''); // Array for buttons
let selectedCell = null; // null for no selection, otherwise target

// Create cells
const createBoard = () => {
  boardHTML.forEach((row, i) => {
    row.forEach((_, j) => {
      let cellDiv = document.createElement('div');
      // Calculate quadrant
      const quadrantNumber = (Math.floor(i / 3) * 3) + Math.floor(j / 3) + 1;
      // Add clases and id
      cellDiv.classList.add('cell', `quadrant-${quadrantNumber}`);
      cellDiv.id = `${i}-${j}`;
      if (i == 3 || i == 6) cellDiv.style.borderTop = '2px solid black';
      if (j == 3 || j == 6) cellDiv.style.borderLeft = '2px solid black';
      // listeners
      cellDiv.tabIndex = 0; // tabIndex allows to select the HTMLElement
      addListenersToCell(cellDiv);
      board.appendChild(cellDiv);
      boardHTML[i][j] = cellDiv;
    });
  });
}
// // Add Listeners to HighLight the selected Cell (internal function)
const addListenersToCell = (cell) => {
  cell.addEventListener('focus', (e) => {
    selectedCell = e.target;
    let [row, col] = e.target.id.split('-');
    console.log(row, col);
    selectedCellRowCol(row, col, '#85AAB644');
    cell.style.backgroundColor = '#2274A599';
  })
  cell.addEventListener('blur', (e) => {
    let [row, col] = e.target.id.split('-');
    selectedCellRowCol(row, col);
    cell.style.backgroundColor = '';
    selectedCell = null;
  })
}

// // highlight rows and cols of the selected Cell (internal function)
const selectedCellRowCol = (x, y, color='') => {
  // The parameters x and y are the row and column of the selected cell.
  for (let i = 0; i < 9; i++) {
    // Highlight row
    boardHTML[x][i].style.backgroundColor = color;
    // Highlight column
    boardHTML[i][y].style.backgroundColor = color;
  }
}

// Create number buttons
const createNumberButtons = () => {
  controlsHTML.forEach((_, i) => {
    let button = document.createElement('button');
    button.innerText = i + 1;
    button.classList.add('number-button');
    button.id = `button-${i}`;
    button.value = i + 1;
    numberButtonsListeners(button);
    controls.appendChild(button);
    controlsHTML[i] = button;
  });
}

// // Adding listeners to the numeric buttons (controls) (internal function)
const numberButtonsListeners = (button) => {
  button.addEventListener('click', (e) => {
      if (!selectedCell) return; // If there's no selected cell, do nothing.
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
}

// Mode Buttons
const createModeButtons = () => {
  for (let i = 0; i < 3; i++) {
    let modeButton = document.createElement('button');
    let difficulty = i == 0 ? 'Easy' : i == 1 ? 'Medium' : 'Hard';
    modeButton.innerText = difficulty;
    modeButton.classList.add('mode-button');
    modeButton.id = `mode-button-${difficulty}`;
    mode.appendChild(modeButton);
  }
}

// Reset Button
const createResetButton = () => {
  let resetButton = document.createElement('button');
  resetButton.innerText = 'Reset';
  resetButton.id = 'reset-button';
  reset.appendChild(resetButton);
  resetButton.addEventListener('click', () => {
    boardHTML.forEach((row, i) => {
      row.forEach((cell, j) => {
        cell.innerText = '';
      });
    });
  });
}

const createButtons = () => {
  createNumberButtons();
  createModeButtons();
  createResetButton();
}

window.onload = () => {
  createBoard();
  createButtons();
}
window.createSudoku = createSudoku;