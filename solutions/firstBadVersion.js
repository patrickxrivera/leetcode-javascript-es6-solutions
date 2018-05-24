/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 **/

const isBadVersion = function(version) {
  return version === 2;
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let lowerBound = 0,
      upperBound = n;

    while (upperBound - lowerBound !== 1) {
      const midpoint = Math.floor((upperBound + lowerBound) / 2);

      if (isBadVersion(midpoint)) {
        upperBound = midpoint;
        continue;
      }

      lowerBound = midpoint;
    }

    return upperBound;
  };
};

solution(isBadVersion)(3);
