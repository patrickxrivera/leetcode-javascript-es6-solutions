/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
  if (n <= 3) return n;

  let first = 2;
  let second = 3;

  for (let i = 4; i <= n; i++) {
    const temp = second;
    second += first;
    first = temp;
  }

  return second;
};
