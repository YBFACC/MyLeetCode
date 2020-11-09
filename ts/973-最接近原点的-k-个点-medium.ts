/*
 * @lc app=leetcode.cn id=973 lang=typescript
 *
 * [973] 最接近原点的 K 个点
 */

import { Heap } from "../moban/heap";

//自己--优先队列-模版

// @lc code=start
function kClosest(points: number[][], K: number): number[][] {
  const minHeap = new Heap<number[]>([], (a: number[], b: number[]) => a[0] >= b[0])
  const Len = points.length
  //[val,index]
  for (let i = 0; i < Len; i++) {
    const [x, y] = points[i]
    const X = x ** 2
    const Y = y ** 2
    const target = Math.sqrt(X + Y)
    minHeap.insert([target, i])
  }
  const res: number[][] = []
  while (--K >= 0) {
    const [target, index] = minHeap.extract() as number[]
    res.push(points[index])
  }
  return res
};
// @lc code=end

kClosest([[1, 3], [-2, 2]], 1)