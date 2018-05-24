/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var findFirst = function(nums, target) {
  let idx = -1,
    L = 0,
    R = nums.length - 1;

  while (L <= R) {
    let M = parseInt((R - L) / 2 + L);

    if (nums[M] === target) {
      idx = M;
    }
    if (nums[M] >= target) {
      R = M - 1;
    } else {
      L = M + 1;
    }
  }

  return idx;
};

var findLast = function(nums, target) {
  let idx = -1,
    L = 0,
    R = nums.length - 1;

  while (L <= R) {
    let M = parseInt((R - L) / 2 + L);

    if (nums[M] === target) {
      idx = M;
    }
    if (nums[M] <= target) {
      L = M + 1;
    } else {
      R = M - 1;
    }
  }

  return idx;
};

var searchRange = function(nums, target) {
  return [findFirst(nums, target), findLast(nums, target)];
};
