/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * 自己--set-额外空间
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) return null
  let set = new Set()
  while (head && head.next) {
    if (!set.has(head)) {
      set.add(head)
      ;[head] = [head.next]
    } else {
      return head
    }
  }
  return null
}
// @lc code=end
