/*
 * @lc app=leetcode.cn id=1014 lang=javascript
 *
 * [1014] 最佳观光组合
 */

// @lc code=start
/**
 * 参考--等式拆分
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function (A) {
  let res = 0
  let mx = A[0] + 0
  for (let i = 1; i < A.length; i++) {
    res = Math.max(res, mx + A[i] - i)
    mx = Math.max(mx, A[i] + i)
  }

  return res
}
// @lc code=end
