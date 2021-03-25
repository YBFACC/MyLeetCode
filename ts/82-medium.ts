import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//自己--链表--o1空间

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null
  const tump = new ListNode(-1000)
  tump.next = head
  let start = tump, index = head
  while (index && index.next) {
    let temp = index.next
    if (temp.val === index.val) {
      while (temp.next && temp.val === index.val) {
        temp = temp.next
      }
      if (temp.val === index.val) {
        start.next = null
      } else {
        start.next = temp
      }
      index = temp
    } else {
      [start, index] = [index, index.next]
    }
  }

  return tump.next
};
deleteDuplicates(ListNode.create([1, 1,]))