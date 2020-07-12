/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * 参考--逆向二维dp
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  if (!dungeon.length) return 1
  const row = dungeon.length
  const col = dungeon[0].length
  let dp = Array.from({ length: row + 1 }, () =>
    Array.from({ length: col + 1 }, () => Infinity)
  )
  dp[row][col - 1] = 1
  dp[row - 1][col] = 1
  for (let i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j >= 0; j--) {
      let min = Math.min(dp[i + 1][j], dp[i][j + 1])
      dp[i][j] = Math.max(1, min - dungeon[i][j])
    }
  }
  return dp[0][0]
}
// @lc code=end

calculateMinimumHP([
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30, -5]
])
