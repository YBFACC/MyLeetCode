/*
 * @lc app=leetcode.cn id=1334 lang=typescript
 *
 * [1334] 阈值距离内邻居最少的城市
 */

import { isSemicolonClassElement } from "typescript"

//参考--最短路径--每个节点当起点用一次dijkstra

// @lc code=start
// function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
//   const map = Array.from({ length: n }, (v1, k1) =>
//     Array.from({ length: n }, (v2, k2) => (k1 === k2 ? 0 : Infinity))
//   )
//   for (const [from, to, weight] of edges) {
//     map[from][to] = weight
//     map[to][from] = weight
//   }
//   let res = 0
//   let MIN = n + 1

//   for (let i = 0; i < n; i++) {//起点
//     const dist = Array.from({ length: n }, () => 0)
//     const set = Array.from({ length: n }, () => false)
//     set[i] = true

//     for (let v = 0; v < n; v++) {
//       dist[v] = map[i][v]
//     }

//     for (let j = 0; j < n - 1; j++) {//执行j次
//       let minValue = Infinity
//       let strat = i
//       for (let k = 0; k < n; k++) {//到达k的距离
//         if (!set[k] && dist[k] < minValue) {
//           minValue = dist[k]
//           strat = k
//         }
//       }
//       set[strat] = true
//       for (let k = 0; k < n; k++) {
//         if (!set[k] && dist[k] > map[strat][k] + dist[strat]) {
//           dist[k] = map[strat][k] + dist[strat]
//         }
//       }
//     }

//     let temp = 0
//     for (let j = 0; j < n; j++) {
//       if (dist[j] <= distanceThreshold) temp++
//     }
//     if (temp <= MIN) {
//       MIN = temp
//       res = i
//     }
//   }

//   return res
// }

//dijkstra堆的优化版

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
  const map = Array.from({ length: n }, (v1, k1) =>
    Array.from({ length: n }, (v2, k2) => (k1 === k2 ? 0 : Infinity))
  )
  for (const [from, to, weight] of edges) {
    map[from][to] = weight
    map[to][from] = weight
  }
  let res = 0
  let MIN = n + 1

  for (let i = 0; i < n; i++) {//起点
    const dist = Array.from({ length: n }, () => Infinity)
    dist[i] = 0
    const MinHeap = new Heap<number[]>([], (a: number[], b: number[]) => {
      return a[0] >= b[0]
    })
    //[距离，目的地]
    MinHeap.insert([0, i])
    while (!MinHeap.isEmpty()) {
      const [val, index] = MinHeap.extract() as number[]
      if (dist[index] < val) continue
      for (let k = 0; k < n; k++) {
        if (dist[k] > map[index][k] + val) {
          dist[k] = map[index][k] + val
          MinHeap.insert([map[index][k] + val, k])
        }
      }
    }

    let temp = 0
    for (let j = 0; j < n; j++) {
      if (dist[j] <= distanceThreshold) temp++
    }
    if (temp <= MIN) {
      MIN = temp
      res = i
    }
  }

  return res
}


// @lc code=end
console.log(
  findTheCity(4, [[0, 1, 3], [1, 2, 1], [1, 3, 4], [2, 3, 1]], 4)
)