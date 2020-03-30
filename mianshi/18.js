/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 自己--秒杀
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  if (!head) return null
  if (head.val === val) return head.next
  let res = head
  while (head.next) {
    if (head.next.val === val) {
      head.next = head.next.next
      break
    }
    head = head.next
  }
  return res
}
