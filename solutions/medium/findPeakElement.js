/**
 * @param {number[]} nums
 * @return {number}
 */

const find = (nums, l, r) => {
  if (l === r) return r;

  const mid = Math.floor((l + r) / 2);

  return nums[mid] > nums[mid + 1] ? find(nums, l, mid) : find(nums, mid + 1, r);
};

const findPeakElement = (nums) => find(nums, 0, nums.length - 1);

findPeakElement([1, 2, 1, 3, 5, 6, 4]);
