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

/**
 * 参考--floyd算法
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) return null
  let curr = head
  let pro = head
  while (pro && pro.next) {
    ;[curr, pro] = [curr.next, pro.next.next]
    if (pro === curr) {
      while (head !== curr) {
        head = head.next
        curr = curr.next
      }
      return head
    }
  }
  return null
}
