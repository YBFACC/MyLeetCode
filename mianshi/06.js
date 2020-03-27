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
 * @return {number[]}
 */
var reversePrint = function(head) {
  let list = []
  while (head) {
    list.push(head.val)
    head = head.next
  }
  return list.reverse()
}
