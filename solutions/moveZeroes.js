/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const swap = (nums, i, lastZeroFoundAt) => {
  const temp = nums[i];
  nums[i] = nums[lastZeroFoundAt];
  nums[lastZeroFoundAt] = temp;
};

const moveZeroes = (nums) => {
  for (let i = 0, lastZeroFoundAt = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      swap(nums, i, lastZeroFoundAt);
      lastZeroFoundAt++;
    }
  }

  return nums;
};
