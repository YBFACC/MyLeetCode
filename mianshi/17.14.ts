//自己--小顶堆

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie, NumberOfTrailingZeros, LinkedEdge } from 'lc-tool';

function smallestK(arr: number[], k: number): number[] {
  const heap = new Heap(arr), res = []

  while (k-- > 0) {
    res.push(heap.poll() as number)
  }

  return res
};

