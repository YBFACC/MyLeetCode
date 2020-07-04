/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * 参考--dp
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let dp = Array.from({ length: s.length + 1 }).fill(0)
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i + 1] = dp[i - 1] + 2
      } else if (i - dp[i] > 0 && s[i - dp[i] - 1] === '(') {
        dp[i + 1] = dp[i] + dp[i - dp[i] - 1] + 2
      }
    }
  }
  return Math.max(...dp)
}
// @lc code=end

longestValidParentheses('(())())()(()()()()((()()')
