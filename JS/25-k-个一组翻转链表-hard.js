/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start

/**
 * 自己--链表-空间O(1)
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head) return null
  let dummy = new ListNode(null)
  dummy.next = null
  let pro = head
  let long = dummy
  while (pro) {
    let len = 1
    let left = pro
    while (pro && pro.next && len < k) {
      ;[pro] = [pro.next]
      len++
    }
    if (len === k) {
      ;[pro.next, pro] = [null, pro.next]
      long.next = swap(left)
      while (long.next) {
        ;[long] = [long.next]
      }
    } else {
      long.next = left
      break
    }
  }
  return dummy.next
}

function swap(node) {
  let dummy = new ListNode(null)
  let long = dummy
  while (node.next) {
    let head = node.next
    let he_ad = node
    while (head.next) {
      ;[head, he_ad] = [head.next, he_ad.next]
    }
    he_ad.next = null
    long.next = head
    long = long.next
  }
  long.next = node
  return dummy.next
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

reverseKGroup(a1, 2)
