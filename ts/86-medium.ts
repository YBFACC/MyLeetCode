
//自己--重做--合并链表

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';
function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head) return null
  const max = new ListNode(0)
  const min = new ListNode(0)
  let max_i = max
  let min_i = min
  while (head) {
    if (head.val < x) {
      min_i.next = head
      min_i = min_i.next
    } else {
      max_i.next = head
      max_i = max_i.next
    }
    head = head.next
    min_i.next = null
    max_i.next = null
  }

  min_i.next = max.next

  return min.next
};

partition(ListNode.create([1, 4, 3, 2, 5, 2]), 3)