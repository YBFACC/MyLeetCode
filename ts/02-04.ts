import { ListNode } from 'leetcode-class'

//自己--用2个伪节点
function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head) return null

  const small = new ListNode(0)
  let smail_tail = small
  const big = new ListNode(0)
  let big_tail = big
  while (head) {
    if (head.val < x) {
      smail_tail.next = head
      smail_tail = smail_tail.next
    } else {
      big_tail.next = head
      big_tail = big_tail.next
    }
    let pre = head
    head = head.next
    pre.next = null
  }
  smail_tail.next = big.next
  return small.next
}

partition(ListNode.create([1, 4, 3, 2, 5, 2]), 3)
