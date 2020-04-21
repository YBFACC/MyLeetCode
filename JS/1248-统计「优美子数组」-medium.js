/*
 * @lc app=leetcode.cn id=1248 lang=javascript
 *
 * [1248] 统计「优美子数组」
 */

// @lc code=start
/**
 * 自己--滑动窗口-左*右--性能好
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let pre = 0
  let curr = 0
  let sum = 0
  let res = 0
  let pre_num = 1
  let curr_num = 1
  while (pre < nums.length) {
    if (nums[pre] % 2 === 1) {
      sum++
    }
    pre++
    if (sum === k) {
      while (nums[pre] % 2 !== 1 && pre < nums.length) {
        pre++
        pre_num++
      }
      while (nums[curr] % 2 !== 1) {
        curr++
        curr_num++
      }
      curr++
      sum--
      res += pre_num * curr_num
      pre_num = 1
      curr_num = 1
    }
  }
  return res
}
// @lc code=end

numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1], 2)
