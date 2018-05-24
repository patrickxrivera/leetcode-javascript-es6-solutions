/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  const cache = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const difference = target - currNum;

    if (cache.has(difference) && difference !== currNum) {
      const differenceIdx = cache.get(difference);
      return [differenceIdx, i];
    }

    cache.set(currNum, i);
  }

  throw new Error(`Array doesn't contain possible solution.`);
};

const nums = [2, 7, 11, 15];
const target = 9;

twoSum(nums, target);
