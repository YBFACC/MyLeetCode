/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * 自己--滑动窗口--性能好
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return []
  let start = 0
  let end = 0
  let res = []
  while (end < nums.length - 1) {
    if (nums[end + 1] - nums[end] > 1) {
      if (end - start > 0) {
        let str = nums[start] + '->' + nums[end]
        res.push(str)
      } else {
        res.push(nums[end].toString())
      }
      end++
      start = end
      continue
    }
    end++
  }
  if (end - start > 0) {
    let str = nums[start] + '->' + nums[end]
    res.push(str)
  } else {
    res.push(nums[end].toString())
  }
  return res
}
// @lc code=end

summaryRanges([0, 1, 2, 4, 5, 7])
