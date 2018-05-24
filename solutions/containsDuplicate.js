/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = (nums) => {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];

    if (set.has(currNum)) return true;

    set.add(currNum);
  }

  return false;
};
