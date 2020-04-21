/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
 */

// @lc code=start

/**
 * 自己--链表操作--性能一般
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head || !head.next) return head
  let odd = new ListNode(-1)
  let even = new ListNode(-1)
  odd.next = head
  even.next = head.next
  let pointer = even.next.next
  head.next = null
  odd = odd.next
  even = even.next
  even.next = null
  let res = odd
  let even_start = even
  let index = 1
  while (pointer) {
    let temp = pointer.next
    pointer.next = null
    if (index === 1) {
      odd.next = pointer
      odd = odd.next
    } else {
      even.next = pointer
      even = even.next
    }
    index = index === 1 ? 0 : 1
    pointer = temp
  }
  odd.next = even_start

  return res
}
// @lc code=end

function ListNode(val) {
  this.val = val
  this.next = null
}

let a1 = new ListNode(1)
let a2 = new ListNode(2)
let a3 = new ListNode(3)
let a4 = new ListNode(4)
let a5 = new ListNode(5)

a1.next = a2
a2.next = a3
a3.next = a4
a4.next = a5

oddEvenList(a1)
