// Definition for singly-linked list.
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */

const getMiddleNode = (head) => {
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.next;
};

const reverse = (curr, prev = null, next = null) => {
  if (!curr) return prev;

  next = curr.next;
  curr.next = prev;

  prev = curr;
  curr = next;

  return reverse(curr, prev, next);
};

var isPalindrome = function(head) {
  const middleNode = getMiddleNode(head);
  let reversedSecondHalf = reverse(middleNode);

  while (reversedSecondHalf) {
    if (reversedSecondHalf.val !== head.val) return false;

    reversedSecondHalf = reversedSecondHalf.next;
    head = head.next;
  }

  return true;
};

const c = new ListNode('c');
const a = new ListNode('a');
const t = new ListNode('t');
const e = new ListNode('a');
const r = new ListNode('c');

c.next = a;
a.next = t;
t.next = e;
e.next = r;

isPalindrome(c);
