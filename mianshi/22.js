/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 自己--双指针--秒杀
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let pre = head
  let curr = head
  while (k > 0) {
    pre = pre.next
    k--
  }
  while (pre) {
    pre = pre.next
    curr = curr.next
  }
  return curr
}
