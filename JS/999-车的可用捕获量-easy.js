/*
 * @lc app=leetcode.cn id=999 lang=javascript
 *
 * [999] 车的可用捕获量
 */

// @lc code=start
/**
 * 自己--跟54题类似--性能好
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  let res = 0
  function goRight(i, j) {
    for (let col = j; col < board[0].length; col++) {
      if (board[i][col] === 'B') {
        break
      } else if (board[i][col] === 'p') {
        res++
        break
      }
    }
  }
  function goDown(i, j) {
    for (let row = i; row < board.length; row++) {
      if (board[row][j] === 'B') {
        break
      } else if (board[row][j] === 'p') {
        res++
        break
      }
    }
  }
  function goLeft(i, j) {
    for (let col = j; col >= 0; col--) {
      if (board[i][col] === 'B') {
        break
      } else if (board[i][col] === 'p') {
        res++
        break
      }
    }
  }
  function goUp(i, j) {
    for (let row = i; row >= 0; row--) {
      if (board[row][j] === 'B') {
        break
      } else if (board[row][j] === 'p') {
        res++
        break
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'R') {
        goRight(i, j)
        goDown(i, j)
        goLeft(i, j)
        goUp(i, j)
      }
    }
  }
  return res
}
// @lc code=end

numRookCaptures([
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', 'p', '.', '.', '.', '.'],
  ['.', '.', '.', 'R', '.', '.', '.', 'p'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', 'p', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.']
])
