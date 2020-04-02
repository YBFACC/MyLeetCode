/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * 自己想到了双指针--没有亚头节点可以省去特殊处理
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let res = head,
    pre = head,
    curr = head
  let index = 0
  if (n === 1 && !head.next) return null //[1]/1
  while (pre) {
    pre = pre.next
    if (!pre) {
      if (curr === head) {
        if (index === 0 && n === 1) {
          curr.next = null
          break
        }
        if (index === 1) {
          return head.next
        }
      }
      let temp = curr.next
      curr.next = temp.next
      break
    }
    index--
    if (index < 0) {
      curr = curr.next
    }
  }
  return res
}
// @lc code=end

function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * 参考--亚头指针+双指针
 * 亚指针处理需要删除头指针的情况
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(0)
  dummy.next = head
  let curr = dummy
  let pre = dummy
  let index = n + 1

  while (index--) {
    pre = pre.next
  }

  while (pre) {
    pre = pre.next
    curr = curr.next
  }

  curr.next = curr.next.next

  return dummy.next
}

let a1 = new ListNode(1)
let a2 = new ListNode(2)
let a3 = new ListNode(3)
let a4 = new ListNode(4)
let a5 = new ListNode(5)
let a6 = new ListNode(4)
a1.next = a2
a2.next = a3
a3.next = a4
a4.next = a5

removeNthFromEnd(a1, 5)
