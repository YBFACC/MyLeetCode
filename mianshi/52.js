/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 自己--秒杀
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let A = headA
  let B = headB
  while (headA !== headB) {
    if (headA) {
      headA = headA.next
    } else {
      headA = B
    }
    if (headB) {
      headB = headB.next
    } else {
      headB = A
    }
  }
  return headA
}
