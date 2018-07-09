/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.originalArray = nums.slice();
  this.upperBound = nums.length - 1;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.originalArray;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let shuffledArray = this.originalArray.slice();

  shuffledArray.forEach((num, idx) => {
    const randNum = this.randUpTo(idx, this.upperBound);
    [shuffledArray[idx], shuffledArray[randNum]] = [shuffledArray[randNum], shuffledArray[idx]];
  });

  return shuffledArray;
};

Solution.prototype.randUpTo = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
