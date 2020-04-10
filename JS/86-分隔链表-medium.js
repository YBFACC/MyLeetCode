/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * 自己--分成2个链表最后组合--性能好
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head) return null
  let more_head = null
  let less_head = null
  let more = null
  let less = null
  while (head) {
    if (head.val < x) {
      if (!less) {
        less = head
        less_head = head
      } else {
        less.next = head
        less = less.next
      }
    } else {
      if (!more) {
        more = head
        more_head = head
      } else {
        more.next = head
        more = more.next
      }
    }
    head = head.next
  }
  if (!less) {
    return more_head
  } else if (!more) {
    return less_head
  } else {
    more.next = null
    less.next = more_head
    return less_head
  }
}
// @lc code=end
