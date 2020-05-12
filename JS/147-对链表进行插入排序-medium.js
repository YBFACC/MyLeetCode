/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
 */

// @lc code=start
/**
 * 自己--链表操作
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (!head) return head
  let dummy = new ListNode(Number.MIN_SAFE_INTEGER)
  let temp = null
  while (head) {
    ;[head, temp] = [head.next, head]
    temp.next = null
    insert(temp)
  }

  return dummy.next

  function insert(node) {
    let curr = dummy
    let pro = dummy.next
    while (pro) {
      if (curr.val < node.val && pro.val >= node.val) {
        ;[curr.next, node.next] = [node, pro]
        break
      }
      pro = pro.next
      curr = curr.next
    }
    curr.next = node
  }
}
// @lc code=end

function ListNode(val) {
  this.val = val
  this.next = null
}

let a1 = new ListNode(-1)
let a2 = new ListNode(5)
let a3 = new ListNode(3)
let a4 = new ListNode(4)
let a5 = new ListNode(0)
let a6 = new ListNode(2)
a1.next = a2
a2.next = a3
a3.next = a4
a4.next = a5
a5.next = a6

insertionSortList(a1)
