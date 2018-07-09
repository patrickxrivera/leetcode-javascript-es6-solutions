/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const flip = (matrix) => {
  const matrixLength = matrix.length;

  for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
    [matrix[i], matrix[matrixLength - 1 - i]] = [matrix[matrixLength - 1 - i], matrix[i]];
  }
};

const rotate = (matrix) => {
  flip(matrix);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
    }
  }
};
