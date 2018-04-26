/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = (root) => {
  let currLevel = [],
    nextLevel = [];

  let leftToRight = true;
  const outputOverall = [];
  let outputCurrLevel = [];

  currLevel.push(root);

  while (currLevel.length !== 0) {
    const currNode = currLevel.unshift();
    outputCurrLevel.push(currNode.val);

    if (leftToRight) {
      nextLevel.push(currNode.left);
      nextLevel.push(currNode.right);
    } else {
      nextLevel.push(currNode.right);
      nextLevel.push(currNode.left);
    }

    if (currLevel.length === 0) {
      const temp = nextLevel;
      currLevel = nextLevel.slice();
      nextLevel = [];

      outputOverall.push(outputCurrLevel);
      outputCurrLevel = [];

      leftToRight = !leftToRight;
    }
  }
};
