/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * 参考--双向遍历start===end--性能一般
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return []
  let res = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    if(nums[i]>0)break
    let start = i + 1
    let end = nums.length - 1
    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end]
      if (sum < 0) {
        start++
      } else if (sum > 0) {
        end--
      } else {
        res.push([nums[i], nums[start], nums[end]])
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
  return res
}
// @lc code=end
threeSum([0, 0, 0])

/**
 * 自己--超时
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return []
  let res = []
  nums.sort((a, b) => a - b)
  let min = nums[0]
  let max = nums[nums.length - 1]
  for (let i = 0; i < nums.length; i++) {
    if (
      nums[i] === 0 &&
      nums[i] === nums[i + 1] &&
      nums[i + 1] === nums[i + 2]
    ) {
      res.push([0, 0, 0])
      while (i < nums.length) {
        if (nums[i] === 0) {
          i++
        } else {
          i--
          break
        }
      }
    }
    if (nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === nums[j - 1] && j - 1 > i) continue
      let sum = 0 - nums[i] - nums[j]
      if (sum > max || sum < min) continue
      if (nums.lastIndexOf(sum) > j) {
        res.push([nums[i], nums[j], sum])
      }
    }
  }
  return res
}
