/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 参考--反转后半部分到链表
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  let pre = null
  while (slow) {
    let next = slow.next
    slow.next = pre
    pre = slow
    slow = next
  }
  while (pre) {
    if (pre.val !== head.val) {
      return false
    }
    pre = pre.next
    head = head.next
  }
  return true
}
