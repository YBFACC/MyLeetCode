/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
// /**
//  * 参考--递归--超时
//  * @param {string} word1
//  * @param {string} word2
//  * @return {number}
//  */
// var minDistance = function (word1, word2) {
//   let minDist = Number.MAX_SAFE_INTEGER
//   const dfs = function (i, j, edist) {
//     if (i === word1.length || j === word2.length) {
//       if (i < word1.length) {
//         edist += word1.length - i
//       }
//       if (j < word2.length) {
//         edist += word2.length - j
//       }
//       minDist = Math.min(minDist, edist)
//       return
//     }
//     if (word1[i] === word2[j]) {
//       dfs(i + 1, j + 1, edist)
//     } else {
//       dfs(i + 1, j, edist + 1)
//       dfs(i, j + 1, edist + 1)
//       dfs(i + 1, j + 1, edist + 1)
//     }
//   }
//   dfs(0, 0, 0)
//   return minDist
// }

/**
 * 参考--二维dp
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let dp = Array.from({ length: word1.length + 1 }, () =>
    Array.from({ length: word2.length + 1 }, () => Infinity)
  )
  dp[0][0] = 0
  for (let i = 0; i <= word1.length; i++) {
    dp[i][0] = i
  }
  for (let i = 0; i <= word2.length; i++) {
    dp[0][i] = i
  }

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1])
      } else {
        dp[i][j] =
          Math.min(dp[i][j], dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
      }
    }
  }

  return dp[word1.length][word2.length]
}
// @lc code=end

minDistance('intention', 'execution')
