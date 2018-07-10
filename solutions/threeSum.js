// var threeSum = function(nums) {
//   nums.sort(function(a, b) {
//     return a - b;
//   });
//   var target,
//     result = [],
//     len = nums.length;
//   for (var i = 0; i < len; i++) {
//     if (target === nums[i]) {
//       continue;
//     } else {
//       target = nums[i];
//     }
//     var low = i + 1,
//       high = len - 1;
//     while (low < high) {
//       if (nums[low] + nums[high] === -target) {
//         result.push([target, nums[low], nums[high]]);
//         do {
//           low++;
//         } while (nums[low] === nums[low - 1]);
//       } else if (nums[low] + nums[high] < -target) {
//         low++;
//       } else {
//         high--;
//       }
//     }
//   }
//   return result;
// };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const results = [];
  const sortedNums = nums.sort((a, b) => a - b);
  let target = null;

  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (target === nums[i]) continue;

    target = nums[i];

    let front = i + 1;
    back = sortedNums.length - 1;

    while (front < back) {
      const sum = sortedNums[front] + sortedNums[back] - target;

      switch (true) {
        case sum > 0:
          back--;
          break;
        case sum < 0:
          front++;
          break;
        default:
          results.push([target, sortedNums[front], sortedNums[back]]);

          do {
            front++;
          } while (sortedNums[front] === sortedNums[front - 1]);
      }
    }
  }

  return results;
};

threeSum([-1, 0, 1, 2, -1, -4]);

threeSum([-1, 0, 1, 2, -1, -4]);
