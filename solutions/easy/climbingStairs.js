// Notes:
// https://leetcode.com/problems/climbing-stairs/discuss/25299/Basically-it's-a-fibonacci.
// https://leetcode.com/articles/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */

const climbStairs = (n) => {
  if (n < 1) return 0;

  let oneStepBefore = 1;
  let twoStepsBefore = 2;
  let allWays = 0;

  for (let i = 2; i < n; i++) {
    allWays = oneStepBefore + twoStepsBefore;
    oneStepBefore = twoStepsBefore;
    twoStepsBefore = allWays;
  }

  return allWays;
};

climbStairs(3);
