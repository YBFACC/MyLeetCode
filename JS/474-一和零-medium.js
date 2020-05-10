/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * 参考--二维dp
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  let dp = Array.from({ length: m + 1 }, _ =>
    Array.from({ length: n + 1 }, _ => 0)
  )

  for (let i = 0; i < strs.length; i++) {
    let one = _findMaxForm(strs[i])
    let zore = strs[i].length - one
    for (let zores = m; zore <= zores; zores--) {
      for (let ones = n; one <= ones; ones--) {
        dp[zores][ones] = Math.max(
          dp[zores][ones],
          1 + dp[zores - zore][ones - one]
        )
      }
    }
  }
  return dp[m][n]
}

function _findMaxForm(str) {
  let num = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      num++
    }
  }
  return num
}

// @lc code=end
findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3)
