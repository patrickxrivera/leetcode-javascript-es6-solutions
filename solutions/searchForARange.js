/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var findFirst = function(nums, target, idx, L, R) {
  if (L > R) return idx;

  let M = Math.floor((R - L) / 2 + L);

  if (nums[M] === target) {
    idx = M;
  }
  if (nums[M] >= target) {
    R = M - 1;
  } else {
    L = M + 1;
  }

  return findFirst(nums, target, idx, L, R);
};

var findLast = function(nums, target, idx, L, R) {
  if (L > R) return idx;

  let M = Math.floor((R - L) / 2 + L);

  if (nums[M] === target) {
    idx = M;
  }
  if (nums[M] <= target) {
    L = M + 1;
  } else {
    R = M - 1;
  }

  return findLast(nums, target, idx, L, R);
};

var searchRange = function(nums, target) {
  let idx = -1,
    L = 0,
    R = nums.length - 1;

  return [findFirst(nums, target, idx, L, R), findLast(nums, target, idx, L, R)];
};

const nums = [5, 7, 8, 8, 8, 10];
const target = 8;

searchRange(nums, target);
