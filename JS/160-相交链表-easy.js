/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * 参考--双指针--性能好
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) return null
  let A = headA
  let B = headB
  let endA = 1
  let endB = 1
  while (endA > -1 && endB > -1) {
    if (A === B) {
      return A
    }
    if (A.next === null) {
      A = headB
      endA--
    } else {
      A = A.next
    }
    if (B.next === null) {
      B = headA
      endB--
    } else {
      B = B.next
    }
  }
  return null
}

// @lc code=end

/**
 *自己--2次遍历--性能差
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  while (headA) {
    let start = headB
    while (start) {
      if (start === headA) {
        return start
      } else {
        start = start.next
      }
    }
    headA = headA.next
  }
  return null
}
