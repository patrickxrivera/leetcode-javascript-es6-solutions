/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const moveZeroes = (nums) => {
  let i,
    pointer = 0,
    len = nums.length;

  for (i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }

  for (i = pointer; pointer < len; pointer++) {
    nums[pointer] = 0;
  }

  return nums;
};

const nums = [0, 1, 0, 3, 12];

moveZeroes(nums);
