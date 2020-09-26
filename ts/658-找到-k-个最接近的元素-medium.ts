/*
 * @lc app=leetcode.cn id=658 lang=typescript
 *
 * [658] 找到 K 个最接近的元素
 */
//自己--堆
import Heap from "../moban/heap";
// @lc code=start
function findClosestElements(arr: number[], k: number, x: number): number[] {

  const Len = arr.length
  const heap = new Heap<heap_item>()
  //[val,index]
  for (let i = 0; i < Len; i++) {
    const item = arr[i]
    const abs = Math.abs(item - x)
    heap.insert([abs, i])
  }
  const res = []
  while (k-- > 0) {
    const item = heap.extract()
    if (!item) break
    const index = item[1]
    res.push(arr[index])
  }

  return res.sort((a, b) => a - b)
};

interface heap_item {
  [index: number]: number
}

// @lc code=end

findClosestElements([1, 2, 3, 4, 5], 4, -1)