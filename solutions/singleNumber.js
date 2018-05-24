/**
 * @param {number[]} nums
 * @return {number}
 */

const singleNumber = (nums) => {
  const counter = new Set();

  nums.forEach((num) => {
    counter.delete(num) || counter.add(num);
  });

  for (let num of counter.keys()) {
    return num;
  }
};

/*
 Test data
 *************************************
*/

const nums = [2, 3, 4, 4, 3, 3, 2];

singleNumber(nums);
