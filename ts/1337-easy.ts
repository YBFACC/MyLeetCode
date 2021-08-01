import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//自己--优先队列

function kWeakestRows(mat: number[][], k: number): number[] {
  const heap = new Heap<number[]>([], (a: number[], b: number[]) => {
    if (a[0] === b[0]) {
      return a[1] >= b[1]
    }
    return a[0] >= b[0]
  })

  for (let i = 0; i < mat.length; i++) {
    const sum = mat[i].reduce((pre, curr) => pre + curr, 0)
    heap.offer([sum, i])
  }

  const res = []

  while (k-- > 0) {
    const floor = heap.poll() as number[]
    res.push(floor[1])
  }

  return res
};

kWeakestRows(
  [[1, 0, 0, 0],
  [1, 1, 1, 1],
  [1, 0, 0, 0],
  [1, 0, 0, 0]], 2)