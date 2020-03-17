/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * 自己--map记录重复计算--性能差
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  if (nums.length < 2) return false
  let dp = new Map()
  let sum = nums.reduce((pre, curr) => pre + curr)
  for (let i = 0; i < nums.length; i++) {
    if (!dp.has(nums[i])) {
      if (nums[i] === sum - nums[i]) {
        return true
      }
      let temp = nums.slice()
      temp.splice(i, 1)
      dp.set(nums[i], temp)
    }
  }

  for (const [k, v] of dp.entries()) {
    if (v.length === 1) continue
    let sum = v.reduce((pre, curr) => pre + curr)
    for (let i = 0; i < v.length; i++) {
      if (dp.has(k + v[i])) continue
      if (k + v[i] === sum - v[i]) {
        return true
      }
      let temp = v.slice()
      temp.splice(i, 1)
      dp.set(k + v[i], temp)
    }
  }
  return false
}
// @lc code=end
canPartition([1, 2, 3, 5])
