/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const sortedArrayToBST = (nums) => {
  if (nums.length === 0) return null;

  const midpoint = Math.floor(nums.length / 2);

  const root = new TreeNode(nums[midpoint]);

  const leftSide = nums.slice(0, midpoint);
  const rightSide = nums.slice(midpoint + 1);

  root.left = sortedArrayToBST(leftSide);
  root.right = sortedArrayToBST(rightSide);

  return root;
};
