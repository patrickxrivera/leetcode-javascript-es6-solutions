/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

const kthSmallest = (root, k) => {
  const stack = [root];
  let ptr = root;

  while (stack.length) {
    if (ptr !== null) {
      stack.push(ptr);
      ptr = ptr.left;
    } else {
      const currNode = stack.pop();

      k--;

      if (k === 0) {
        return currNode.val;
      }

      ptr = currNode.right;
    }
  }
};
