/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * 自己--列表处理--性能一般
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) return null
  let list = []
  while (head) {
    list.push(head)
    head = head.next
  }
  list.reverse()
  for (let i = 0; i < list.length; i++) {
    if (i === list.length - 1) {
      list[i].next = null
    } else {
      list[i].next = list[i + 1]
    }
  }
  return list[0]
}
// @lc code=end
