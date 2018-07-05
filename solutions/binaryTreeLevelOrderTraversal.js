// Definition for a binary tree node.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

const solution = {
  arr: [],

  levelOrder(root) {
    this._search(root, 1);
    return this.arr;
  },

  _search(root, level) {
    if (!root) return;

    if (this.arr.length < level) {
      this.arr.push([]);
    }

    const arrLevel = this.arr[level - 1];
    arrLevel.push(root.val);

    this._search(root.left, level + 1);
    this._search(root.right, level + 1);
  }
};

const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

solution.levelOrder(tree);
