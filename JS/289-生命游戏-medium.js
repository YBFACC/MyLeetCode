/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * 自己--还可以优化--用复制的list当参考,这样可以省去board[i][j] = list[i][j]
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  let m = board.length
  let n = board[0].length
  if (m < 1) return []
  let list = Array.from({ length: m }, _ =>
    Array.from({ length: n }, _ => undefined)
  )
  const number = function(i, j) {
    let count = 0
    i - 1 > -1 && board[i - 1][j] === 1 ? count++ : null
    i - 1 > -1 && board[i - 1][j + 1] === 1 ? count++ : null
    i - 1 > -1 && board[i - 1][j - 1] === 1 ? count++ : null
    i + 1 < m && board[i + 1][j] === 1 ? count++ : null
    i + 1 < m && board[i + 1][j + 1] === 1 ? count++ : null
    i + 1 < m && board[i + 1][j - 1] === 1 ? count++ : null
    board[i][j - 1] === 1 ? count++ : null
    board[i][j + 1] === 1 ? count++ : null
    return count
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let num = number(i, j)
      if (board[i][j] === 0) {
        list[i][j] = num === 3 ? 1 : 0
      }
      if (board[i][j] === 1) {
        if (num < 2 || num > 3) {
          list[i][j] = 0
        } else {
          list[i][j] = 1
        }
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = list[i][j]
    }
  }
  return
}
// @lc code=end
gameOfLife([
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
])
