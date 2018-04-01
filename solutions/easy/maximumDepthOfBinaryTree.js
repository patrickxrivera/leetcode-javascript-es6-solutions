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

const getMaxDepth = (node, depth = 0) => {
  if (!node) return depth;

  let leftDepth = depth,
    rightDepth = depth;

  const leftMax = getMaxDepth(node.left, (leftDepth += 1));
  const rightMax = getMaxDepth(node.right, (rightDepth += 1));

  const maxDepth = Math.max(leftMax, rightMax);

  return maxDepth;
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
