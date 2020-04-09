/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start

/**
 * 自己--map遍历去重
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let temp = new ListNode(Infinity)
  temp.next = null
  let map = new Map()
  let node = head
  while (node) {
    map.set(node.val, map.has(node.val) ? map.get(node.val) + 1 : 1)
    node = node.next
  }
  let curr = temp
  let pre = head
  while (pre) {
    if (map.get(pre.val) === 1) {
      curr.next = pre
      curr = curr.next
    }
    pre = pre.next
    curr.next=null
  }
  return temp.next
}
// @lc code=end

let a1 = new ListNode(1)
let a2 = new ListNode(2)
let a3 = new ListNode(2)
let a4 = new ListNode(3)
// let a5 = new ListNode(4)
// let a6 = new ListNode(4)
// let a7 = new ListNode(5)

a1.next = a2
a2.next = a3
a3.next = a4
// a4.next = a5
// a5.next = a6
// a6.next = a7

deleteDuplicates(a1)

function ListNode(val) {
  this.val = val
  this.next = null
}
