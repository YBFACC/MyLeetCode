/*
 * @lc app=leetcode.cn id=553 lang=javascript
 *
 * [553] 最优除法
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
  if (nums.length === 1) return nums[0].toString(10)
  let Dividend = nums[0]
  if (nums.length === 2) return Dividend + '/' + nums[1]
  nums.shift()
  let temp = nums.join('/')
  return Dividend + '/(' + temp + ')'
}
//console.log(optimalDivision([1000, 100, 10, 2]))

// @lc code=end
