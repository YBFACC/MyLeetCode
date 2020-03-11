/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * 自己--dp-依旧字母长度--O(n^2)
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let dp = {}
  for (let i = 0; i <= s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let temp = s.slice(i, j)
      if (wordDict.includes(temp)) {
        if (dp[i] === undefined) {
          dp[i] = ''
        }
        if (dp[j] === undefined) {
          dp[j] = dp[i] + temp
        } else {
          dp[i].length + temp.length > dp[j].length
            ? (dp[j] = dp[i] + temp)
            : null
        }
      }
    }
  }
  return dp[s.length] == s
}
// @lc code=end
console.log(wordBreak('aaaaaaa', ['aaaa', 'aaa']))
