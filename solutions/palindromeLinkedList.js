// Notes: https://skyyen999.gitbooks.io/-leetcode-with-javascript/content/questions/234md.html

// Definition for singly-linked list.

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */

const getMidNode = (node) => {
  let slow = node,
    fast = node;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.next;
};

const reverseList = (head) => {
  let prev = null,
    next = null,
    curr = head;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

const setUpComparisonList = (head) => reverseList(getMidNode(head));

const isPalindrome = (head) => {
  const comparisonList = setUpComparisonList(head);
  return comparisonList;
};

const list = new ListNode('t');
list.next = new ListNode('o');
list.next.next = new ListNode('p');
list.next.next.next = new ListNode('t');

isPalindrome(list);
