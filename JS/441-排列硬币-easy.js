/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * 自己--二分
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  if (n <= 1) return n
  let res = 0
  let left = 0
  let right = n
  while (left < right) {
    let mid = left + ((right - left) >> 1)
    let sum = ((1 + mid) / 2) * mid
    if (sum <= n) {
      left = mid + 1
      res = Math.max(res, mid)
    } else {
      right = mid
    }
  }
  return res
}
// @lc code=end

arrangeCoins(2)
