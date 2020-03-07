/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * 自己--dp--性能好
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (m === 1 && n === 1) return 1
  let list = Array.from({ length: n }, _ => Array.from({ length: m }, _ => 0))
  for (let i = 1; i < m; i++) {
    list[0][i] = 1
  }
  for (let i = 1; i < n; i++) {
    list[i][0] = 1
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      list[i][j] = list[i][j - 1] + list[i - 1][j]
    }
  }
  return list[n - 1][m - 1]
}
// @lc code=end
uniquePaths(7, 3)
