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
  let results = this.originalArray.slice();

  for (let i = 0; i < results.length; i++) {
    const randNum = this._randomIntFromInterval(i, this.upperBound);
    const temp = results[i];
    results[i] = results[randNum];
    results[randNum] = temp;
  }

  return results;
};

Solution.prototype._randomIntFromInterval = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
