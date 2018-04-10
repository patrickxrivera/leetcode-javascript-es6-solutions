// Definition for singly-linked list.

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = (curr, prev = null, next = null) => {
  if (!curr) return prev;

  next = curr.next;
  curr.next = prev;
  prev = curr;
  curr = next;

  return reverseList(curr, prev, next);
};

const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

reverseList(list);
