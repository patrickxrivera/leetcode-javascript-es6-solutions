/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
  let overallMax = nums[0],
    currentMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const currNum = nums[i];

    currentMax = Math.max(currNum, currentMax + currNum);
    overallMax = Math.max(currentMax, overallMax);
  }

  return overallMax;
};

const nums = [-2, 3, -3, 4, -1, 2, 1, -5, 4];

maxSubArray(nums);
