/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子序列
 */

// @lc code=start
/**
 * 自己--滑动窗口--O(n^2)
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let res = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < nums.length; i++) {
    let product = nums[i]
    res = Math.max(res, product)
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] !== 0) {
        product *= nums[j]
        res = Math.max(res, product)
      } else {
        break
      }
    }
  }
  return res
}
// @lc code=end
maxProduct([-2])
