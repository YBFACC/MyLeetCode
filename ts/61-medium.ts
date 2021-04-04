import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//自己--遍历求总长度all，首尾相连，返回all - (k % all)的节点

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null
  let [end, all] = toEnd(head)
  end.next = head
  k = all - (k % all)
  while (--k >= 0 && end.next) {
    end = end.next
  }
  const res = end.next
  end.next = null
  return res
};
function toEnd(head: ListNode): [ListNode, number] {
  let num = 1
  while (head && head.next) {
    head = head.next
    num++
  }
  return [head, num]
}
rotateRight(ListNode.create([1, 2, 3]), 5)