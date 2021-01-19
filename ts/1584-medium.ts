/*
 * @lc app=leetcode.cn id=1584 lang=typescript
 *
 * [1584] 连接所有点的最小费用
 */

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//参考--最小生成树-prim

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

  visited[0] = true
  for (let i = 1; i < Len; i++) {
    lowcost[i] = graph[0][i]
  }

  for (let i = 1; i < Len; i++) {
    let minIdx = -1
    let minVal = Infinity
    for (let j = 0; j < Len; j++) {
      if (visited[j]) continue
      if (lowcost[j] < minVal) {
        minIdx = j
        minVal = lowcost[j]
      }
    }
    res += minVal
    visited[minIdx] = true
    lowcost[minIdx] = Infinity

    for (let j = 0; j < Len; j++) {
      if (!visited[j] && graph[minIdx][j] < lowcost[j]) {
        lowcost[j] = graph[minIdx][j]
      }
    }
  }
  return res
};
// @lc code=end

console.log(minCostConnectPoints([[3, 12], [-2, 5], [-4, 1]]))