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

const invertTree = (tree) => {
  if (tree === null) return null;

  const left = invertTree(tree.left);
  const right = invertTree(tree.right);

  tree.left = right;
  tree.right = left;

  return tree;
};

/*
 Test data
 *************************************
*/

const tree = new TreeNode(4);

tree.left = new TreeNode(2);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);

tree.right = new TreeNode(7);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(9);

invertTree(tree);
