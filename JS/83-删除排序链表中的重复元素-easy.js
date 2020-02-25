/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * copy--学习js中使用链表的经验
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let temp = head
  while (temp && temp.next) {
    if (temp.val === temp.next.val) {
      temp.next = temp.next.next
    } else {
      temp = temp.next
    }
  }
  return head
}
// @lc code=end
