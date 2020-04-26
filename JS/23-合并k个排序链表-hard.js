/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 */

// @lc code=start

// /**
//  * 自己--双指针法+两两合并--性能一般
//  * @param {ListNode[]} lists
//  * @return {ListNode}
//  */
// var mergeKLists = function (lists) {
//   if (lists.length === 0) return null
//   if (lists.length < 2) return lists[0]
//   return lists.reduce((pre, curr) => {
//     return merge(pre, curr)
//   })
// }

// function merge(pre, curr) {
//   if (!pre) return curr
//   if (!curr) return pre
//   let temp = new ListNode(-1)
//   let res = temp
//   while (pre && curr) {
//     if (pre.val >= curr.val) {
//       temp.next = curr
//       curr = curr.next
//     } else {
//       temp.next = pre
//       pre = pre.next
//     }
//     temp = temp.next
//     temp.next = null
//     if (!pre) {
//       temp.next = curr
//       break
//     } else if (!curr) {
//       temp.next = pre
//     }
//   }
//   return res.next
// }
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * copy--分治+递归
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  let n = lists.length
  if (n == 0) return null
  let mergeTwoLists = (l1, l2) => {
    if (l1 == null) return l2
    if (l2 == null) return l1
    if (l1.val <= l2.val) {
      l1.next = mergeTwoLists(l1.next, l2)
      return l1
    } else {
      l2.next = mergeTwoLists(l1, l2.next)
      return l2
    }
  }
  let merge = (left, right) => {
    if (left == right) return lists[left]
    let mid = (left + right) >> 1
    let l1 = merge(left, mid)
    let l2 = merge(mid + 1, right)
    return mergeTwoLists(l1, l2)
  }
  return merge(0, n - 1)
}

// @lc code=end

function ListNode(val) {
  this.val = val
  this.next = null
}

let a1 = new ListNode(1)
let a2 = new ListNode(4)
let a3 = new ListNode(5)
a1.next = a2
a2.next = a3
let a4 = new ListNode(1)
let a5 = new ListNode(3)
let a6 = new ListNode(4)
a4.next = a5
a5.next = a6

let a7 = new ListNode(2)
let a8 = new ListNode(6)
a7.next = a8
mergeKLists([a1, a4, a7])
