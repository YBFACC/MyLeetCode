/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 *  自己--类似3数之和--性能好
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)
  let res = nums[0] + nums[1] + nums[2]
  for (let i = 0; i < nums.length; i++) {
    
    let start = i + 1
    let end = nums.length - 1
    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end]
      if (sum === target) {
        res = sum
        break
      } else if (sum > target) {
        end--
      } else {
        start++
      }
      if (Math.abs(target - sum) < Math.abs(target - res)) {
        res = sum
      }
    }
  }
  return res
}
// @lc code=end

threeSumClosest(
  [
    6,
    -18,
    -20,
    -7,
    -15,
    9,
    18,
    10,
    1,
    -20,
    -17,
    -19,
    -3,
    -5,
    -19,
    10,
    6,
    -11,
    1,
    -17,
    -15,
    6,
    17,
    -18,
    -3,
    16,
    19,
    -20,
    -3,
    -17,
    -15,
    -3,
    12,
    1,
    -9,
    4,
    1,
    12,
    -2,
    14,
    4,
    -4,
    19,
    -20,
    6,
    0,
    -19,
    18,
    14,
    1,
    -15,
    -5,
    14,
    12,
    -4,
    0,
    -10,
    6,
    6,
    -6,
    20,
    -8,
    -6,
    5,
    0,
    3,
    10,
    7,
    -2,
    17,
    20,
    12,
    19,
    -13,
    -1,
    10,
    -1,
    14,
    0,
    7,
    -3,
    10,
    14,
    14,
    11,
    0,
    -4,
    -15,
    -8,
    3,
    2,
    -5,
    9,
    10,
    16,
    -4,
    -3,
    -9,
    -8,
    -14,
    10,
    6,
    2,
    -12,
    -7,
    -16,
    -6,
    10
  ],
  -52
)
