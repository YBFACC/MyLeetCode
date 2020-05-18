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
var maxProduct = function (nums) {
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

/**
 * 参考--dp--需要考虑负数连续子序列
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = nums[0]
  let min = nums[0]
  let res = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let temp = min
    min = Math.min(max * nums[i], min * nums[i], nums[i])
    max = Math.max(max * nums[i], temp * nums[i], nums[i])
    res = Math.max(res, max)
  }
  return res
}

console.log(maxProduct([0, 2]))
