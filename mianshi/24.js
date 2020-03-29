/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 自己--list
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) return null
  let list = []
  while (head) {
    head && list.push(head)
    head = head.next
  }
  for (let i = list.length - 1; i >= 0; i--) {
    list[i].next = i === 0 ? null : list[i - 1]
  }
  return list[list.length - 1]
}
