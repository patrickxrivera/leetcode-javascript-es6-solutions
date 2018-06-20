/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function(matrix) {
  const rows = new Set();
  const columns = new Set();

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const currNum = matrix[row][col];
      if (currNum === 0) {
        rows.add(row);
        columns.add(col);
      }
    }
  }

  for (let row of rows) {
    for (let i = 0; i < matrix[row].length; i++) {
      matrix[row][i] = 0;
    }
  }

  for (let col of columns) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }

  return matrix;
};

const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];

setZeroes(matrix);
