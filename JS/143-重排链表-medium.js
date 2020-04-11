/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * 自己--快慢找中间,反转后半部分链表,再合并--性能一般
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head) return
  if (!head.next) return
  //let res = head
  let pre = head
  let curr = head
  while (pre && pre.next) {
    pre = pre.next
    pre && (pre = pre.next)
    if (!pre || !pre.next) {
      let next = curr.next
      curr.next = null
      curr = next
      continue
    }
    curr = curr.next
  }
  let curr_next = curr.next
  curr.next = null
  while (curr_next) {
    let next = curr_next.next
    curr_next.next = curr
    curr = curr_next
    curr_next = next
  }
  while (curr && head) {
    let to_head = head.next
    head.next = curr
    curr = curr.next
    head = head.next
    head.next = to_head
    if (to_head) {
      head = head.next
    } else {
      break
    }
  }
  if (curr) {
    head.next = curr
  }

  return
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
// a2.next = a3
// a3.next = a4
// a4.next = a5
reorderList(a1)
