/*
 * @lc app=leetcode.cn id=1290 lang=javascript
 *
 * [1290] 二进制链表转整数
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
 * 自己--parseInt转化字符串--性能好
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let str = ''
  while (head) {
    str+=head.val
    head=head.next
  }
  return parseInt(str,2)
}
// @lc code=end
