/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * 参考--二分或者floyd--麻了
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let left = 0
  let right = nums.length - 1
  let res = -1
  while (left <= right) {
    let target = (left + right) >> 1
    let cnt = 0
    for (let i = 0; i < nums.length; i++) {
      cnt += nums[i] <= target
    }
    if (cnt <= target) {
      left = target + 1
    } else {
      right = target - 1
      res = target
    }
  }
  return res
}
// @lc code=end

findDuplicate([1,3,4,2,2])
