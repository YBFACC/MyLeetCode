import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie, NumberOfTrailingZeros, LinkedEdge } from 'lc-tool';
//参考细节--链表

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  let pre = head, curr = head
  while (k-- > 0 && pre) {
    pre = pre.next
  }
  while (pre && curr) {
    pre = pre.next
    curr = curr.next
  }
  return curr
};
getKthFromEnd(ListNode.create([1]), 1)