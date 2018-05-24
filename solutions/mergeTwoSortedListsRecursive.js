// Definition for singly-linked list.

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const mergeTwoLists = (l1, l2) => {
  if (l1 === null) {
    return l2;
  }

  if (l2 === null) {
    return l2;
  }

  const dummy = new ListNode();
  const pointer = dummy;

  if (l1.val <= l2.val) {
    pointer.next = l1;
    pointer.next.next = mergeTwoLists(l1.next, l2);
  } else {
    pointer.next = l2;
    pointer.next.next = mergeTwoLists(l1, l2.next);
  }

  const head = dummy.next;

  return head;
};

const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

const l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

mergeTwoLists(l1, l2);
