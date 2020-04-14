/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 */

// 反转链表
// let curr = start=>反转后头节点
// let pre = start.next
// curr.next = null
// while (pre) {
//   let temp = pre.next
//   pre.next = curr
//   curr = pre
//   pre = temp
// }

// @lc code=start
/**
 * 自己--辅助栈--性能一般
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (l2.val === 0) return l1
  if (l1.val === 0) return l2

  let stack1 = []
  let stack2 = []
  while (l1) {
    stack1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    stack2.push(l2.val)
    l2 = l2.next
  }

  let carry = 0
  let num = stack1.pop() + stack2.pop()
  if (num > 9) {
    carry = 1
    num -= 10
  }
  let root = new ListNode(num)
  let pre = root
  while (stack1.length > 0 || stack2.length > 0 || carry) {
    num = (stack1.pop() || 0) + (stack2.pop() || 0) + carry
    if (carry === 1) {
      carry = 0
    }
    if (num > 9) {
      carry = 1
      num -= 10
    }

    pre = new ListNode(num)
    pre.next = root
    root = pre
  }

  return pre
}

// @lc code=end

function ListNode(val) {
  this.val = val
  this.next = null
}

let a1 = new ListNode(1)
let a2 = new ListNode(2)
let a3 = new ListNode(3)

let a4 = new ListNode(1)
let a5 = new ListNode(2)
let a6 = new ListNode(3)
a1.next = a2
a2.next = a3

a4.next = a5
a5.next = a6

addTwoNumbers(a1, a4)
