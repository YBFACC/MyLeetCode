/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * 自己--左扫+右扫
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let left = [1]

  for (let i = 0; i < nums.length; i++) {
    left[i + 1] = left[i] * nums[i]
  }
  left.push(1)

  let right = [1]
  right[nums.length + 1] = 1
  for (let i = nums.length; i > 0; i--) {
    right[i] = right[i + 1] * nums[i - 1]
  }

  let res = []

  for (let i = 0; i < left.length - 2; i++) {
    res[i] = left[i] * right[i + 2]
  }

  return res
}
// @lc code=end

productExceptSelf([1])
