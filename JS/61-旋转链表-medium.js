/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 自己--亚头节点--性能好
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return 0
  let temp = new ListNode(0)
  temp.next = head
  let len = 1
  let pre = head
  let curr = head
  while (k > 0) {
    pre = pre.next
    k--
    if (pre) {
      len++
    } else {
      k = k % len
      pre = head
    }
  }
  while (pre.next) {
    pre = pre.next
    curr = curr.next
  }
  pre.next = temp.next
  temp.next = curr.next
  curr.next = null
  return temp.next
}
// @lc code=end
