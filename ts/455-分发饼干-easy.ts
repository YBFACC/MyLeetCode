/*
 * @lc app=leetcode.cn id=455 lang=typescript
 *
 * [455] 分发饼干
 */

import { Heap } from "../moban/heap";

// @lc code=start
//自己--贪心-优先队列
function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b)
  const heap = new Heap(s)
  let res = 0
  for (let i = 0; i < g.length; i++) {
    if (heap.isEmpty()) break
    const target = heap.extract() as number
    if (target >= g[i]) {
      res++
    } else {
      i--
    }
  }
  return res
};
// @lc code=end

findContentChildren([1, 2], [1, 2, 3])