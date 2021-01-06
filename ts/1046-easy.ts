import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//自己--重做-大顶堆

function lastStoneWeight(stones: number[]): number {
  const heap = new Heap(stones, (a: number, b: number) => {
    return a <= b
  })

  while (heap.length >= 2) {
    const a = heap.extract() as number
    const b = heap.extract() as number
    if (a - b === 0) continue
    heap.insert(a - b)
  }

  return heap.length === 0 ? 0 : heap.topValue()
};

console.log(lastStoneWeight([3, 1]))