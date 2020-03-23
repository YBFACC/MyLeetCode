/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

// @lc code=start
/**
 * 自己--链表--性能好
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (!l1 && !l2) return null
  if (!l1) return l2
  if (!l2) return l1

  let carry = 0
  let pre = null
  let res = null
  while (l1 || l2 || carry !== 0) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    if (carry !== 0) carry = 0
    if (sum > 9) {
      sum -= 10
      carry++
    }
    if (!pre) {
      pre = new ListNode(sum)
      res = pre
    } else {
      pre.next = new ListNode(sum)
      pre = pre.next
    }

    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }
  return res
}
// @lc code=end

let a1 = new ListNode(5)
let a2 = new ListNode(4)
let a3 = new ListNode(3)
//a1.next = a2
// a2.next = a3
let a4 = new ListNode(5)
let a5 = new ListNode(6)
let a6 = new ListNode(4)
// a4.next = a5
// a5.next = a6
addTwoNumbers(a1, a4)
