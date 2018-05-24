/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const rotate = (nums, k) => {
  if (nums.length === 1) return nums;

  while (counter) {
    const numToRotate = nums.pop();
    nums.unshift(numToRotate);
    counter--;
  }
};

// This works as well

// const rotate = (nums, k) => {
//    const toRotate = nums.splice(nums.length - k, k);
//    nums.unshift(...toRotate)
// };

const nums = [1, 2, 3, 4];
const k = 1;

rotate(nums, k);
console.log(nums);
