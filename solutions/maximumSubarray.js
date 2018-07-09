/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = (nums) => {
  let max = -Infinity;
  let streak = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    streak = Math.max(nums[i], streak + nums[i]);
    max = Math.max(max, streak);
  }

  return max;
};
