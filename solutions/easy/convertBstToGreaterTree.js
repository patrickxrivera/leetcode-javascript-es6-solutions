// Definition for a binary tree node.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

class Solution {
  constructor() {
    this.currSum = 0;
  }

  convertBST(root) {
    if (root.right) {
      this.convertBST(root.right, this.currSum);
    }

    this.currSum += root.val;
    root.val = this.currSum;

    if (root.left) {
      this.convertBST(root.left, this.currSum);
    }

    return root;
  }
}

const tree = new TreeNode(5);
tree.right = new TreeNode(13);
tree.right.right = new TreeNode(15);
tree.right.left = new TreeNode(11);
tree.left = new TreeNode(2);

const solution = new Solution();

solution.convertBST(tree);
