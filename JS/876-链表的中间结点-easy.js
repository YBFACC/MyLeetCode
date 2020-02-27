/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
 * copy--快慢指针--性能一般
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let slow = (fast = head)
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}
// @lc code=end

/**
 * 自己--利用数组找到中间节点--性能差
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  if (head === null) return null
  let list = []
  while (head) {
    list.push(head)
    head = head.next
  }
  if (list.length % 2 === 0) {
    return list[list.length / 2]
  } else {
    return list[(list.length - 1) / 2]
  }
}
