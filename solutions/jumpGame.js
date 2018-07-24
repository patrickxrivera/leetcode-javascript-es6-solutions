/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  let requiredJumps = 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    requiredJumps = nums[i] >= requiredJumps ? 1 : requiredJumps + 1;
  }

  return requiredJumps === 1;
}
