
import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//自己--重做--A遍历完接B，B遍历完接A。路程相等

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (!headA || !headB) return null
  let A = headA, B = headB
  let count = 0
  while (count < 3) {
    if (A === B) {
      return A
    }
    if (A && A.next) {
      A = A.next
    } else {
      A = headB
      count++
    }
    if (B && B.next) {
      B = B.next
    } else {
      B = headA
      count++
    }
  }
  return null
};
