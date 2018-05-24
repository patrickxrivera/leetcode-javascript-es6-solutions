// Definition for singly-linked list.

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

const deleteNode = (node) => {
  const replacement = node.next;
  node.val = replacement.val;
  node.next = replacement.next;
};

const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);

deleteNode(list.next.next);
list;
