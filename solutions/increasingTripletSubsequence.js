/**
 * @param {number[]} nums
 * @return {boolean}
 */

const hasTriplet = (a, b, c) =>
  a < b && b < c && (a !== Infinity && b !== Infinity && c !== Infinity);

function increasingTriplet(nums) {
  let a = Infinity,
    b = Infinity,
    c = Infinity;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    a = Math.min(a, num);

    if (a === num) continue;

    b = Math.min(b, num);

    if (b === num) continue;

    c = Math.min(c, num);
  }

  return hasTriplet(a, b, c);
}
