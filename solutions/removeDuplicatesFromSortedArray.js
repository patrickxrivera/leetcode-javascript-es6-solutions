/*
  Notes:

  This solution is optimal b/c it takes O(1) space
  and you don't incur a time cost for deleting elements,
  which in JS takes up to O(n) time.
  The operation in the else clause ensures that non-duplicates
  are always the first elements in the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = (nums) => {
  let count = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;
    } else {
      nums[i - count] = nums[i];
    }
  }

  return nums.length - count;
};

const nums = [1, 1, 2, 3, 3, 3, 4, 5];

removeDuplicates(nums);
