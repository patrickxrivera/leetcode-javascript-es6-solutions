/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let a, b, c;
  a = b = c = Infinity;

  for (let i = 0; i < nums.length; i++) {
    a = Math.min(a, nums[i]);
    if (a === nums[i]) continue;
    b = Math.min(b, nums[i]);
    if (b == nums[i]) continue;
    c = Math.min(c, nums[i]);
  }
  return a < b && b < c && (a !== Infinity && b !== Infinity && c !== Infinity);
};

increasingTriplet([6, 7, 2, 1, 3, 4]);
