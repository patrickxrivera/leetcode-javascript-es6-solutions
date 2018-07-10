/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let max = nums.length;
  const actualSum = nums.reduce((acc, curr) => acc + curr);
  const targetSum = nums.reduce((acc, curr, idx) => acc + idx + 1, 0);

  return targetSum - actualSum;
};

missingNumber([0, 3, 1]);
