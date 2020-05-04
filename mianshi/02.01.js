/**
 * 自己--easy
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function (head) {
  if (!head || !head.next) return head
  let set = new Set()
  let res = head
  set.add(head.val)
  while (head && head.next) {
    if (set.has(head.next.val)) {
      ;[head.next] = [head.next.next]
    } else {
      set.add(head.next.val)
      head = head.next
    }
  }
  return res
}

function ListNode(val) {
  this.val = val
  this.next = null
}

let a1 = new ListNode(1)
let a2 = new ListNode(1)
let a3 = new ListNode(1)
let a4 = new ListNode(2)
let a5 = new ListNode(1)

a1.next = a2
a2.next = a3
a3.next = a4
a4.next = a5
removeDuplicateNodes(a1)
