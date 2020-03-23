/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * 自己--套15题的方法--性能好
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return []
  let res = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === nums[j - 1] && j > i + 1) continue
      let two = nums[i] + nums[j]

      let start = j + 1
      let end = nums.length - 1
      while (start < end) {
        let sum = two + nums[start] + nums[end]
        if (sum < target) {
          start++
        } else if (sum > target) {
          end--
        } else {
          res.push([nums[i], nums[j], nums[start], nums[end]])
          while (nums[start] === nums[start + 1]) {
            start++
          }
          while (nums[end] === nums[end + 1]) {
            end--
          }
          start++
          end--
        }
      }
    }
  }
  return res
}
// @lc code=end

fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11)
