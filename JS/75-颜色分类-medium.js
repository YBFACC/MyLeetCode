/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * 自己--统计每个出现都字符
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let one = 0
  let zore = 0
  let two = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      one++
    } else if (nums[i] === 0) {
      zore++
    } else {
      two++
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (zore > 0) {
      nums[i] = 0
      zore--
    } else if (one > 0) {
      nums[i] = 1
      one--
    } else {
      nums[i] = 2
    }
  }
  return
}
// @lc code=end
/**
 * 参考--类快排
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let p0 = 0,
    curr = 0
  let p2 = nums.length - 1

  while (curr <= p2) {
    if (nums[curr] === 0) {
      let temp = nums[p0]
      nums[p0++] = nums[curr]
      nums[curr++] = temp
    } else if (nums[curr] === 2) {
      let temp = nums[curr]
      nums[curr] = nums[p2]
      nums[p2--] = temp
    } else {
      curr++
    }
  }
  return
}

sortColors([1, 0, 2, 1, 1, 0, 2])
