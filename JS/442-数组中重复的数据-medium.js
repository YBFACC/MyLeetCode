/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * 参考--下标计数
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    nums[(nums[i] - 1) % nums.length] += nums.length
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 2 * nums.length) res.push(i + 1)
  }
  return res
}
// @lc code=end
findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])
