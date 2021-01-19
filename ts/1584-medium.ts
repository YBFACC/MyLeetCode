/*
 * @lc app=leetcode.cn id=1584 lang=typescript
 *
 * [1584] 连接所有点的最小费用
 */

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//参考--最小生成树-prim+堆

// @lc code=start
function minCostConnectPoints(points: number[][]): number {
  const Len = points.length
  let res = 0
  const graph = Array.from({ length: Len }, () => Array.from({ length: Len }, () => 0))

  for (let i = 0; i < Len; i++) {
    for (let j = i + 1; j < Len; j++) {
      const dist = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])
      graph[i][j] = dist
      graph[j][i] = dist
    }
  }
  const lowcost = Array.from({ length: Len }, () => Infinity)
  const visited = Array.from({ length: Len }, () => false)

  //[距离，下标]
  const heap = new Heap<number[]>([], (a: number[], b: number[]) => {
    return a[0] >= b[0]
  })
  heap.insert([0, 0])

  while (!heap.isEmpty()) {
    const [val, index] = heap.extract() as number[]
    if (visited[index]) continue
    visited[index] = true
    res += val
    for (let i = 0; i < Len; i++) {
      const temp = graph[i][index]
      if (!visited[i] && temp < lowcost[i]) {
        lowcost[i] = temp
        heap.insert([temp, i])
      }
    }
  }

  return res
};
// @lc code=end

console.log(minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]]))