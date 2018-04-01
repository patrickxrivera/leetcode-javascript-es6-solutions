/**
 * @return {number}
 * @param {number[]} nums
 */

const majorityElement = (nums) => {
  let count = 0,
    candidate;

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];

    if (isZero(count)) {
      candidate = currNum;
    }

    const delta = getDeltaFrom(candidate, currNum);
    count += delta;
  }

  return candidate;
};

const isZero = (count) => count === 0;

const getDeltaFrom = (candidate, currNum) => (currNum === candidate ? 1 : -1);

const nums = [1, 2, 3, 3, 2, 2, 2];

majorityElement(nums);
