/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const mergeSort = (nums) => {
  if (nums.length < 2) return nums;

  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  const sortedNums = merge(sortedLeft, sortedRight);

  return sortedNums;
};

const merge = (left, right) => {
  let result = [];

  while (left.length && right.length) {
    left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift());
  }

  return result.concat(left, right);
};

var findKthLargest = function(nums, k) {
  const sortedNums = mergeSort(nums);

  return sortedNums[nums.length - k];
};

const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6];

findKthLargest(nums, 2);
