/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * 自己--亚头节点--性能好
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) return null
  if (!head.next) return head
  let temp = new ListNode(0)
  temp.next = head
  let pre = head.next
  let curr = head
  let pile = temp
  while (pre && curr) {
    pile.next = pre
    curr.next = pre.next
    pre.next = curr
    pile = pile.next.next

    curr = pile ? pile.next : null
    pre = curr ? curr.next : null
  }
  return temp.next
}
// @lc code=end

let a1 = new ListNode(1)
let a2 = new ListNode(2)
let a3 = new ListNode(3)
let a4 = new ListNode(4)
let a5 = new ListNode(5)

a1.next = a2
a2.next = a3
a3.next = a4
a4.next = a5

function ListNode(val) {
  this.val = val
  this.next = null
}

swapPairs(a1)
