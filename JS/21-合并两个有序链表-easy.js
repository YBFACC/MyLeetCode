/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * 自己--递归方法更简洁
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let temp = new ListNode(-1)
  let res = temp
  while (l1 && l2) {
    if (l1.val < l2.val) {
      temp.next = l1
      l1=l1.next
    } else {
      temp.next = l2
      l2=l2.next
    }
    temp = temp.next
  }
  while (l1) {
    temp.next = l1
    l1=l1.next
    temp = temp.next
  }
  while (l2) {
    temp.next = l2
    l2=l2.next
    temp = temp.next
  }
  return res.next
}
// @lc code=end
