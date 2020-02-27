/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * 自己--数组遍历双指针--性能一般
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let list = []
  while (head) {
    list.push(head.val)
    head = head.next
  }
  for (let i = 0, j = list.length - 1; j > i; i++, j--) {
    if (list[i] !== list[j]) {
      return false
    }
  }
  return true
}
// @lc code=end
