/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  let leading = head,
    trailing = head,
    distance = n + 1,
    counter = 0;

  while (counter < distance) {
    try {
      leading = leading.next;
      counter++;
    } catch (err) {
      if (distance - counter === 1) {
        return head.next;
      }
      throw new Error(
        'N is larger than list size. Please choose a smaller number'
      );
    }
  }

  while (leading !== null) {
    leading = leading.next;
    trailing = trailing.next;
  }

  trailing.next = trailing.next.next;

  return head;
};
