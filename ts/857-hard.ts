import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie, NumberOfTrailingZeros, LinkedEdge } from 'lc-tool';

/**
 * 参考－－大顶堆
 * 排序解决了－－工人至少应当得到他们的最低期望工资
 * @param quality 
 * @param wage 
 * @param k 
 * @returns 
 */
function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
  const Len = quality.length
  const ds: number[][] = []
  for (let i = 0; i < Len; i++) {
    ds.push([wage[i] / quality[i], i])
  }
  ds.sort((a, b) => a[0] - b[0])

  const heap = new Heap<number>([], (v1: number, v2: number) => {
    return v1 <= v2
  })
  let res = 1e18, tot = 0
  for (let i = 0; i < Len; i++) {
    const curr = quality[ds[i][1]]
    tot += curr
    heap.offer(curr)
    if (heap.size > k) tot -= heap.poll() as number
    if (heap.size === k) res = Math.min(res, tot * ds[i][0])
  }
  return res
};
mincostToHireWorkers([10, 20, 5], [70, 50, 30], 2)