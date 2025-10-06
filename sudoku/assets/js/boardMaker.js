
const findEmpty = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 0) {
        return [i, j];
      }
    }
  }
}

const isValid = (board, num, pos) => {
  const [y, x] = pos;

  // looking for no coinsidence on X and Y
  for (let i = 0; i < board.length; i++) {
    if (board[y][i] === num) return false;
    if (board[i][x] === num) return false;
  }

  // Define quadrant
  // y,x = 0 || 1 || 2 = 0
  // y,x = 3 || 4 || 5 = 1
  // y,x = 6 || 7 || 8 = 2
  // ex: 7, 7 => 2, 2
  const boxY = Math.floor(y / 3);
  const boxX = Math.floor(x / 3);

  for (let i = boxY * 3; i < boxY * 3 + 3; i++) {
    for (let j = boxX * 3; j < boxX * 3 + 3; j++) {
      if (board[i][j] === num) return false;
    }
  }

  return true;
}

const solve = (board) => {
  const empty = findEmpty(board);
  if (!empty) return true;
  const [y, x] = empty;

  const numbers = Array.from({ length: 9 }, (_, i) => i + 1)
    .sort(() => Math.random() - 0.5);

  for (const num of numbers) {
    if (isValid(board, num, [y, x])) {
      board[y][x] = num;
      if (solve(board)) return true;
      board[y][x] = 0;
    }
  }

  return false;
}

export const createSudoku = () => {
  const board = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0));

  if (solve(board)) return board;
}