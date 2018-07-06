/**
 * @param {number[]} nums
 * @return {number}
 */

const getMax = (currStreak) => (acc, curr) => {
  const newStreak = curr + currStreak;

  currStreak = Math.max(newStreak, curr);

  return Math.max(currStreak, acc);
};

const maxSubArray = (nums) => nums.reduce(getMax(-Infinity), -Infinity);

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

const nums = [-2, 3, -3, 4, -1, 2, 1, -5, 4];

maxSubArray(nums);
