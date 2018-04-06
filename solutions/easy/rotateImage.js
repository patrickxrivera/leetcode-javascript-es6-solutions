/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const rotate = (matrix) => {
  // iterate through array
  for (var i = 0; i <= matrix.length - 1; i++) {
    // keeps track of our matrix length inside of inner loop
    var tracker = matrix.length - 1;

    // inner loop that starts at the end of the matrix length
    for (var j = matrix.length - 1; j >= 0; j--) {
      // assigns the popped value to current
      var current = matrix[i].pop();
      // unshifts the valued assigned to current to the first position of last array
      matrix[tracker].unshift(current);
      // decrement tracker after each j iteration
      tracker--;
    }
  }
  return matrix;
};

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

rotate(matrix);
