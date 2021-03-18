import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//提示--一次遍历
//做一个临时节点来存储反向链表

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (!head || right - left === 0) return head
  let res = new ListNode(0)
  res.next = head
  head = res
  right -= left - 1
  while (--left > 0) {
    head = head.next as ListNode
  }
  let x = head
  let curr = x.next as ListNode
  x.next = null
  const tump = new ListNode(0)
  tump.next = curr
  const end = tump.next
  curr = curr.next as ListNode

  while (--right > 0) {
    const temp = tump.next
    tump.next = curr
    curr = curr.next as ListNode
    tump.next.next = temp
  }

  x.next = tump.next
  end.next = curr
  return res.next
};

reverseBetween(ListNode.create([1, 2, 3, 4, 5]), 2, 4)
reverseBetween(ListNode.create([3, 5]), 1, 2)