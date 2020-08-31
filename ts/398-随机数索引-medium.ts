/*
 * @lc app=leetcode.cn id=398 lang=typescript
 *
 * [398] 随机数索引
 */

// @lc code=start
//参考--蓄水池抽样算法
class Solution {
  list: number[]
  constructor(nums: number[]) {
    this.list = nums
  }

  pick(target: number): number {
    let res = NaN
    const list = this.list
    let n = 0
    for (let i = 0; i < list.length; i++) {
      if (list[i] === target) {
        n++
        const r = Math.floor(Math.random() * n)
        if (r === 0) {
          res = i
        }
      }
    }
    return res
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
// @lc code=end

