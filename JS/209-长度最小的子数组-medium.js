/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * 自己--滑动窗口法
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let sum = 0
  let list = []
  let res = Infinity
  while (nums.length > 0) {
    let curr = nums.shift()
    list.push(curr)
    sum += curr
    if (sum >= s) {
      while (list.length > 0 && sum - list[0] >= s) {
        sum -= list.shift()
      }
      res = Math.min(res, list.length)
    }
  }
  return res === Infinity ? 0 : res
}
// @lc code=end

console.log(minSubArrayLen(100, [2, 3, 1, 2, 4, 3, 7]))
