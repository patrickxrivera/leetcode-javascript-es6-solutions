// Definition for a binary tree node.
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */

const maxDepth = (root) => {
  if (!root) return 0;

  const leftMax = maxDepth(root.left);
  const rightMax = maxDepth(root.right);

  const max = Math.max(leftMax, rightMax) + 1;

  return max;
};

/*
 Test data
 *************************************
*/

const tree = new TreeNode(3);

tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

getMaxDepth(tree);
