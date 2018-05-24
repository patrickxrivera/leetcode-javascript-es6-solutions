/**
 * @param {number[]} nums
 * @return {number}
 */

const rob = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  const opt = [];
  opt[0] = nums[0];
  opt[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    opt[i] = Math.max(nums[i] + opt[i - 2], opt[i - 1]);
  }

  return opt[opt.length - 1];
};
