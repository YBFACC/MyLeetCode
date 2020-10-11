/*
 * @lc app=leetcode.cn id=1331 lang=typescript
 *
 * [1331] 数组序号转换
 */
import { Heap } from "../moban/heap";
// @lc code=start
//自己--优先队列
interface heap_item {
  val: number
  indexs: number[]
}
function arrayRankTransform(arr: number[]): number[] {
  const map = new Map()
  const Len = arr.length
  for (let i = 0; i < Len; i++) {
    const num = arr[i]
    if (!map.has(num)) {
      map.set(num, [])
    }
    map.get(num).push(i)
  }
  const heap = new Heap<heap_item>([], (a: heap_item, b: heap_item) => a.val >= b.val)
  map.forEach((v, k) => {
    heap.insert({ val: k, indexs: v })
  })
  let i = 1
  while (!heap.isEmpty()) {
    const { val, indexs } = heap.extract() as heap_item
    for (const index of indexs) {
      arr[index] = i
    }
    i++
  }
  return arr
};
// @lc code=end

arrayRankTransform([37,12,28,9,100,56,80,5,12])