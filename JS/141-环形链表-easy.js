/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * 自己--参考83题遍历方式---每个节点内存地址不同
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let set = new Set()
  while (head && head.next) {
    if (!set.has(head)) {
      set.add(head)
      head = head.next
    } else {
      return true
    }
  }
  return false
}
// @lc code=end
