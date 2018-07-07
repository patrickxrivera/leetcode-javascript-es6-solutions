/**
 * @param {number} n
 * @return {number}
 */

// Iteratively

const climbStairs = (n) => {
  if (n <= 3) return n;

  let curr = 3;
  let prev = 2;

  for (let i = 4; i < n + 1; i++) {
    const temp = curr;
    curr += prev;
    prev = temp;
  }

  return curr;
};

// Recursively

const climbStairs = (n, memo = {}) => {
  if (memo[n]) return memo[n];

  if (n <= 2) return n;

  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);

  return memo[n];
};
