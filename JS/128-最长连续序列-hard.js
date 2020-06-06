/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * 参考--map储存区间长度
 * 有点像第238题--左累乘*右累乘
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0
  let map = new Map()
  let res = Number.MIN_SAFE_INTEGER
  for (const num of nums) {
    if (map.has(num)) continue

    let left = map.get(num - 1) || 0
    let right = map.get(num + 1) || 0
    let all = left + right + 1

    map.set(num, all)
    res = Math.max(res, all)

    map.set(num - left, all)
    map.set(num + right, all)
  }
  return res
}
// @lc code=end

longestConsecutive([100, 4, 200, 1, 3, 2])
