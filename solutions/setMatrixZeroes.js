/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const setZeroes = () => {
  let firstRowZero = false;
  let firstColumnZero = false;

  //set first row and column zero or not
  for (i = 0; i < matrix.length; i++) {
    if (matrix[i][0] == 0) {
      firstColumnZero = true;
      break;
    }
  }

  for (i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] == 0) {
      firstRowZero = true;
      break;
    }
  }

  //mark zeros on first row and column
  for (i = 1; i < matrix.length; i++) {
    for (j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  //use mark to set elements
  for (i = 1; i < matrix.length; i++) {
    for (j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }

  //set first column and row
  if (firstColumnZero) {
    for (i = 0; i < matrix.length; i++) matrix[i][0] = 0;
  }

  if (firstRowZero) {
    for (i = 0; i < matrix[0].length; i++) matrix[0][i] = 0;
  }
};

const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];

setZeroes(matrix);
