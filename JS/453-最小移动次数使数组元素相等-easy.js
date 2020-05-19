/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小移动次数使数组元素相等
 */

// @lc code=start
/**
 * copy--n-1个元素增加1=>1个元素减1
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let min = Math.min(...nums)
  let path = 0
  for (let i = 0, len = nums.length; i < len; i++) {
    path += nums[i] - min
  }
  return path
}

// @lc code=end
