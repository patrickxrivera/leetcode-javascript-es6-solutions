/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const sort = (arr) => arr.sort((a, b) => a - b);

const intersect = (nums1, nums2) => {
  nums1 = sort(nums1);
  nums2 = sort(nums2);

  let idx1 = 0,
    idx2 = 0;

  let result = [];

  while (idx1 < nums1.length && idx2 < nums2.length) {
    if (nums1[idx1] < nums2[idx2]) {
      idx1++;
      continue;
    }

    if (nums1[idx1] > nums2[idx2]) {
      idx2++;
      continue;
    }

    result.push(nums1[idx1]);
    idx1++;
    idx2++;
  }

  return result;
};

const nums1 = [2, 5, 4, 6];
const nums2 = [6, 2, 7, 9];

intersect(nums1, nums2);
