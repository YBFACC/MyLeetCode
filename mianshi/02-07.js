/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 自己--两个链表拼接后长度相等
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null
  const A = headA
  const B = headB
  let res = null
  let temp = 0
  while (headA && headB) {
    if (headA === headB) {
      res = headA
      break
    }
    headA = headA.next
    headB = headB.next
    if (!headA) {
      headA = B
      if (temp > 3) break
      temp++
    }
    if (!headB) {
      headB = A
      if (temp > 3) break
      temp++
    }
  }

  return res
}
