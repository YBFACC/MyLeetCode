/*
 * @Author: yubingfeng
 * @Date: 2021-11-02 09:17:18
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-11-02 09:34:38
 * @Description: 自己--后一个节点覆盖前一个
 */
import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie, NumberOfTrailingZeros, LinkedEdge } from 'lc-tool';
function deleteNode(root: ListNode | null): void {
  if (!root) return
  let left: ListNode | null = root, right = root.next
  while (right && left) {
    left.val = right.val
    right = right.next
    if (!right && left) left.next = null
    left = left.next
  }

  return
};

deleteNode(ListNode.create([4, 5, 1, 9]))