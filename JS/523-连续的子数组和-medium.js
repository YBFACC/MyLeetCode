/*
 * @lc app=leetcode.cn id=523 lang=javascript
 *
 * [523] 连续的子数组和
 */

// @lc code=start
/**
 * 参考--前缀和
 * 注意0
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  if (nums.length < 2) return false
  if (k === 0) {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === 0 && nums[i - 1] === 0) {
        return true
      }
    }
    return false
  }
  let list = [0]
  for (const num of nums) {
    list.push(list[list.length - 1] + num)
  }

  for (let i = 0; i < list.length; i++) {
    for (let j = i + 2; j < list.length; j++) {
      if ((list[j] - list[i]) % k === 0) {
        return true
      }
    }
  }

  return false
}
// @lc code=end

/**
 * 参考--用hashmap存贮余数
 * 相同余数出现时，代表满足条件
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var checkSubarraySum = function (nums, k) {
  if (nums.length < 2) return false
  if (k === 0) {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === 0 && nums[i - 1] === 0) {
        return true
      }
    }
    return false
  }
  let map = new Map([[0, -1]])
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (k !== 0) {
      sum %= k
      if (map.has(sum)) {
        if (i - map.get(sum) > 1) {
          return true
        }
      } else {
        map.set(sum, i)
      }
    }
  }
  return false
}

console.log(checkSubarraySum([5, 0, 0], 0))
