/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * 参考--解构赋值好简洁-迭代不符合空间要求
 * @param {ListNode} head
 * @return {ListNode}
 */
// var sortList = function (head) {
//   // 递归思想：
//   if (!head || !head.next) return head
//   //  1. 快慢针二分，前一半截断并获取后一半开始节点(奇数中间，偶数中前)
//   let [slow, fast, mid] = [head, head.next, null]
//   while (fast && fast.next) {
//     ;[slow, fast] = [slow.next, fast.next.next]
//   }
//   ;[slow.next, mid] = [null, slow.next]
//   // 2. 左右递归；
//   let [left, right] = [sortList(head), sortList(mid)]
//   // 3. 合并递归结果左右链表
//   let curr = (res = new ListNode(null))
//   while (left && right) {
//     if (left.val < right.val) [curr.next, left] = [left, left.next]
//     else [curr.next, right] = [right, right.next]
//     curr = curr.next
//   }
//   curr.next = left ? left : right
//   //  4. return 空节点.next;
//   return res.next
// }

// @lc code=end

/**
 * 参考--bottom-to-up--最优解法
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) return head
  let dummy = new ListNode(null)
  dummy.next = head
  let length = 0
  while (head) {
    head = head.next
    length++
  }
  for (let step = 1; step < length; step = step * 2) {
    let curr = dummy.next
    let temp = dummy
    while (curr) {
      let left = curr
      let right = cut(left, step)
      curr = cut(right, step)
      temp.next = marge(left, right)
      while (temp.next) {
        temp = temp.next
      }
    }
  }
  return dummy.next
}

function cut(node, step) {
  while (--step && node) {
    node = node.next
  }
  if (node && node.next) {
    let res = node.next
    node.next = null
    return res
  } else {
    return null
  }
}

function marge(left, right) {
  let curr = (res = new ListNode(null))
  while (left && right) {
    if (left.val < right.val) [curr.next, left] = [left, left.next]
    else [curr.next, right] = [right, right.next]
    curr = curr.next
  }
  curr.next = left ? left : right
  return res.next
}

function ListNode(val) {
  this.val = val
  this.next = null
}

let a1 = new ListNode(-1)
let a2 = new ListNode(5)
let a3 = new ListNode(3)
let a4 = new ListNode(4)
let a5 = new ListNode(0)
a1.next = a2
a2.next = a3
a3.next = a4
a4.next = a5
sortList(a1)
