/*
 * @lc app=leetcode.cn id=480 lang=typescript
 *
 * [480] 滑动窗口中位数
 */

//参考官方题解--数据流中位数的升级版-延迟删除
//大数据放在小堆中，小数据放在大堆中。
//可以用延迟删除的理由：
//中位数只需要堆顶的数有效，其他数可以省略。
//将省略的数统计个数。当堆顶的数改变时，校验数是否有效

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';
// @lc code=start
function medianSlidingWindow(nums: number[], k: number): number[] {
  const res: number[] = []
  const Len = nums.length
  const all = new All(k)
  for (let i = 0; i < k; i++) {
    all.insert(nums[i])
  }
  res.push(all.getMid())
  for (let i = k; i < Len; i++) {
    all.insert(nums[i])
    all.erase(nums[i - k])
    res.push(all.getMid())
  }
  return res
};
class All {
  max: Heap<number>
  min: Heap<number>
  map: any
  maxSize = 0
  minSize = 0
  k: number
  constructor(k: number) {
    this.max = new Heap([], (a: number, b: number) => a >= b)
    this.min = new Heap([], (a: number, b: number) => a <= b)
    this.map = new Map<number, number>()
    this.k = k
  }
  insert(num: number) {
    if (this.min.length === 0 || num <= this.min.topValue()) {
      this.min.insert(num)
      this.minSize++
    } else {
      this.max.insert(num)
      this.maxSize++
    }
    this.makeBalance()
  }
  makeBalance() {
    if (this.minSize > this.maxSize + 1) {
      this.max.insert(this.min.extract() as number)
      this.minSize--
      this.maxSize++
      this.prune(this.min)
    } else if (this.minSize < this.maxSize) {
      this.min.insert(this.max.extract() as number)
      this.minSize++
      this.maxSize--
      this.prune(this.max)
    }
  }
  prune(heap: Heap<number>) {
    while (!heap.isEmpty()) {
      let top = heap.topValue() as any
      if (this.map.has(top) && this.map.get(top) > 0) {
        this.map.set(top, this.map.get(top) - 1)
        heap.extract()
      } else {
        break
      }
    }
  }
  erase(num: number) {
    if (!this.map.has(num)) {
      this.map.set(num, 1)
    } else {
      this.map.set(num, this.map.get(num) + 1)
    }
    if (num <= this.min.topValue()) {
      this.minSize--
      if (num === this.min.topValue()) {
        this.prune(this.min)
      }
    } else {
      this.maxSize--
      if (num === this.max.topValue()) {
        this.prune(this.max)
      }
    }
    this.makeBalance()
  }
  getMid(): number {
    const Min = this.min.topValue()
    const Max = this.max.topValue()
    return ((this.k % 2 === 1)) ?
      Min :
      (Min + Max) / 2
  }
}
// @lc code=end

medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)