// Notes:
// 1) use a dummy head to instantiate the master list

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
  let dummy = new ListNode();
  let pointer = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      pointer.next = l1;
      l1 = l1.next;
    } else {
      pointer.next = l2;
      l2 = l2.next;
    }
    pointer = pointer.next;
  }

  pointer.next = l1 || l2;

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
