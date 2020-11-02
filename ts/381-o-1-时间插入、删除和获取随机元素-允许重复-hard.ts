/*
 * @lc app=leetcode.cn id=381 lang=typescript
 *
 * [381] O(1) 时间插入、删除和获取随机元素 - 允许重复
 */
import { TreeNode, ListNode, runScript } from 'leetcode-class';
// @lc code=start
//官方翻译版--数组存储+map记录下标
//要删除的一项与最后一项进行交换----想到了堆中删除元素的方法
class RandomizedCollection {
  idx: Map<number, Set<number>>
  nums: number[]
  constructor() {
    this.idx = new Map()
    this.nums = []
  }

  insert(val: number): boolean {
    const nums = this.nums
    const idx = this.idx
    nums.push(val)
    const set: Set<number> = idx.has(val) ? idx.get(val) as Set<number> : new Set()
    set.add(nums.length - 1)
    idx.set(val, set)
    return set.size === 1
  }

  remove(val: number): boolean {
    const nums = this.nums
    const idx = this.idx
    if (!idx.has(val)) {
      return false
    }
    let i!: number
    for (const iterator of idx.get(val) as Set<number>) {
      if (!i) {
        i = iterator
        break
      }
    }
    const lastNum = nums[nums.length - 1]
    nums[i] = lastNum
    idx.get(val)?.delete(i)
    idx.get(lastNum)?.delete(nums.length - 1)
    if (i < this.nums.length - 1) idx.get(lastNum)?.add(i)
    if (idx.get(val)?.size === 0) {
      idx.delete(val)
    }
    nums.pop()
    return true
  }

  getRandom(): number {
    const nums = this.nums
    return nums[Math.floor(Math.random() * nums.length)]
  }
}


console.log(runScript(
  ["RandomizedCollection", "insert", "remove", "insert", "remove", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"],
  [[], [0], [0], [-1], [0], [], [], [], [], [], [], [], [], [], []]
  , [RandomizedCollection]))
// @lc code=end

