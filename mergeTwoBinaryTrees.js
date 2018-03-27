/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const mergeTrees = (t1, t2) => {
  if (t1 === null) return t2;
  if (t2 === null) return t1;

  t1.val += t2.val;

  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);

  return t1;
};

/* 
 Test data
 *************************************
*/

const t1 = new TreeNode(1);
t1.left = new TreeNode(3);
t1.left.left = new TreeNode(5);
t1.right = new TreeNode(2);

const t2 = new TreeNode(2);
t2.left = new TreeNode(1);
t2.left.right = new TreeNode(4);
t2.right = new TreeNode(3);
t2.right.right = new TreeNode(7);

mergeTrees(t1, t2);
