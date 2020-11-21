import { TreeNode, ListNode } from 'lc-tool';

//参考--重做--归并

function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head
  const dummy: ListNode = new ListNode()
  dummy.next = head
  let Len = 0
  while (head) {
    head = head.next
    Len++
  }

  for (let step = 1; step < Len; step = step * 2) {
    let curr = dummy.next
    let temp = dummy
    while (curr) {
      const l1 = curr
      const l2 = cut(l1, step)
      const _curr = cut(l2, step)
      temp.next = merge(l1, l2)
      if (!_curr) break
      curr = _curr
      while (temp.next) {
        temp = temp.next
      }
    }
  }

  return dummy.next
};
function cut(l1: ListNode | null, dist: number): ListNode | null {
  while (l1 && l1.next && --dist > 0) {
    l1 = l1.next
  }
  if (l1 && l1.next) {
    const temp = l1.next
    l1.next = null
    return temp
  } else {
    return null
  }
}

function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const res = new ListNode()
  let curr = res

  while (l1 && l2) {
    if (l1.val > l2.val) {
      [curr.next, l2] = [l2, l2.next]
    } else {
      [curr.next, l1] = [l1, l1.next]
    }
    curr = curr.next
  }

  curr.next = l1 ? l1 : l2

  return res.next
}

sortList(ListNode.create([-1, 5, 3, 4, 0]))