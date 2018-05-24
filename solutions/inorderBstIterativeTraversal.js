// Definition for a binary tree node.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
  const stack = [];
  const output = [];
  let curr = root;

  while (stack.length || curr) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
      continue;
    }

    curr = stack.pop();
    output.push(curr.val);

    curr = curr.right;
  }

  return output;
};

const tree = new TreeNode(1);

tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);

inorderTraversal(tree);
