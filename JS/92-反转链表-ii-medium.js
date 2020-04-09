/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * 自己--反转一段链表-亚头节点--一次遍历
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (!head) return null
  if (m === n) return head
  let temp = new ListNode(0)
  temp.next = head
  let node = temp
  let M_pre
  n = n - m
  while (m > 0) {
    if (m === 1) {
      M_pre = node
    }
    node = node.next
    m--
  }
  let M = node
  let curr = node
  let pre = node.next
  while (n >0) {
    n--
    let pre_next = pre.next
    pre.next = curr
    curr = pre
    pre = pre_next
  }
  M_pre.next=curr
  M.next=pre
  return temp.next
}
// @lc code=end

function ListNode(val) {
  this.val = val
  this.next = null
}

let a1 = new ListNode(1)
let a2 = new ListNode(2)
// let a3 = new ListNode(3)
// let a4 = new ListNode(4)
// let a5 = new ListNode(5)

a1.next = a2
// a2.next = a3
// a3.next = a4
// a4.next = a5
reverseBetween(a1, 1, 2)
