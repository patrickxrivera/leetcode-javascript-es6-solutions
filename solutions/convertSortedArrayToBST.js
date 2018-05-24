// Definition for a binary tree node.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const getRightHalf = (nums, midpoint) => nums.slice(midpoint + 1);

const createRightHalf = (nums, midpoint) =>
  sortedArrayToBST(getRightHalf(nums, midpoint));

const getLeftHalf = (nums, midpoint) => nums.slice(0, midpoint);

const createLeftHalf = (nums, midpoint) =>
  sortedArrayToBST(getLeftHalf(nums, midpoint));

const sortedArrayToBST = (nums) => {
  if (nums.length === 0) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);

  const midpoint = Math.floor(nums.length / 2);
  const node = new TreeNode(nums[midpoint]);

  node.left = createLeftHalf(nums, midpoint);
  node.right = createRightHalf(nums, midpoint);

  return node;
};
