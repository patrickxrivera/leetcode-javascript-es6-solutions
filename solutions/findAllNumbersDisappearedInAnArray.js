/**
 * @param {number[]} nums
 * @return {number[]}
 */

const findDisappearedNumbers = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    negateNums(nums, i);
  }

  let results = [];

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];

    if (currNum > 0) {
      const disappearedNum = i + 1;
      results.push(disappearedNum);
    }
  }

  return results;
};

const negateNums = (nums, i) => {
  const idx = Math.abs(nums[i]) - 1;
  nums[idx] = nums[idx] < 0 ? nums[idx] : -nums[idx];
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];

findDisappearedNumbers(nums);
