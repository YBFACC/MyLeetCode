/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * 自己--回溯--注意去重
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (board.length === 0) return []
  let rowMax = board.length
  let colMAx = board[0].length
  let ways = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]

  let has = new Set()
  for (let i = 0; i < rowMax; i++) {
    if (board[i][0] === 'O') {
      bfs(i, 0)
    }
  }
  for (let i = 0; i < rowMax; i++) {
    if (board[i][colMAx - 1] === 'O') {
      bfs(i, colMAx - 1)
    }
  }

  for (let j = 0; j < colMAx; j++) {
    if (board[0][j] === 'O') {
      bfs(0, j)
    }
  }
  for (let j = 0; j < colMAx; j++) {
    if (board[rowMax - 1][j] === 'O') {
      bfs(rowMax - 1, j)
    }
  }

  function bfs(i, j) {
    let queue = [[i, j]]
    has.add(`${i},${j}`)
    while (queue.length > 0) {
      let curr = queue.shift()
      let currR = curr[0]
      let currL = curr[1]
      board[currR][currL] = '#'
      for (const [r, l] of ways) {
        let row = currR + r
        let col = currL + l
        if (
          has.has(`${row},${col}`) ||
          row < 0 ||
          row >= rowMax - 1 ||
          col < 0 ||
          col >= colMAx - 1
        ) {
          continue
        }
        if (board[row][col] === 'O') {
          has.add(`${row},${col}`)
          queue.push([row, col])
        }
      }
    }

    return
  }

  for (let i = 0; i < rowMax; i++) {
    for (let j = 0; j < colMAx; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X'
      } else if (board[i][j] === '#') {
        board[i][j] = 'O'
      }
    }
  }

  return
}

// @lc code=end
solve([
  [
    'X',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O'
  ],
  [
    'O',
    'X',
    'O',
    'O',
    'O',
    'O',
    'X',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'X',
    'X'
  ],
  [
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'X',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'X'
  ],
  [
    'O',
    'O',
    'X',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'X',
    'O'
  ],
  [
    'O',
    'O',
    'O',
    'O',
    'O',
    'X',
    'O',
    'O',
    'O',
    'O',
    'X',
    'O',
    'O',
    'O',
    'O',
    'O',
    'X',
    'O',
    'O',
    'X'
  ],
  [
    'X',
    'O',
    'O',
    'O',
    'X',
    'O',
    'O',
    'O',
    'O',
    'O',
    'X',
    'O',
    'X',
    'O',
    'X',
    'O',
    'X',
    'O',
    'X',
    'O'
  ],
  [
    'O',
    'O',
    'O',
    'O',
    'X',
    'O',
    'O',
    'X',
    'O',
    'O',
    'O',
    'O',
    'O',
    'X',
    'O',
    'O',
    'X',
    'O',
    'O',
    'O'
  ],
  [
    'X',
    'O',
    'O',
    'O',
    'X',
    'X',
    'X',
    'O',
    'X',
    'O',
    'O',
    'O',
    'O',
    'X',
    'X',
    'O',
    'X',
    'O',
    'O',
    'O'
  ],
  [
    'O',
    'O',
    'O',
    'O',
    'O',
    'X',
    'X',
    'X',
    'X',
    'O',
    'O',
    'O',
    'O',
    'X',
    'O',
    'O',
    'X',
    'O',
    'O',
    'O'
  ],
  [
    'X',
    'O',
    'O',
    'O',
    'O',
    'X',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'X',
    'X',
    'O',
    'O',
    'X',
    'O',
    'O',
    'X'
  ],
  [
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'X',
    'O',
    'O',
    'X',
    'O',
    'O',
    'O',
    'X',
    'O',
    'X'
  ],
  [
    'O',
    'O',
    'O',
    'O',
    'X',
    'O',
    'X',
    'O',
    'O',
    'X',
    'X',
    'O',
    'O',
    'O',
    'O',
    'O',
    'X',
    'O',
    'O',
    'O'
  ],
  [
    'X',
    'X',
    'O',
    'O',
    'O',
    'O',
    'O',
    'X',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O'
  ],
  [
    'O',
    'X',
    'O',
    'X',
    'O',
    'O',
    'O',
    'X',
    'O',
    'X',
    'O',
    'O',
    'O',
    'X',
    'O',
    'X',
    'O',
    'X',
    'O',
    'O'
  ],
  [
    'O',
    'O',
    'X',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'X',
    'O',
    'O',
    'O',
    'O',
    'O',
    'X',
    'O',
    'X',
    'O'
  ],
  [
    'X',
    'X',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'X',
    'O',
    'X',
    'X',
    'O',
    'O',
    'O',
    'X',
    'O',
    'O'
  ],
  [
    'O',
    'O',
    'X',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'X',
    'O',
    'O',
    'X',
    'O',
    'X',
    'O',
    'X',
    'O',
    'O'
  ],
  [
    'O',
    'O',
    'O',
    'X',
    'O',
    'O',
    'O',
    'O',
    'O',
    'X',
    'X',
    'X',
    'O',
    'O',
    'X',
    'O',
    'O',
    'O',
    'X',
    'O'
  ],
  [
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O',
    'O'
  ],
  [
    'X',
    'O',
    'O',
    'O',
    'O',
    'X',
    'O',
    'O',
    'O',
    'X',
    'X',
    'O',
    'O',
    'X',
    'O',
    'X',
    'O',
    'X',
    'O',
    'O'
  ]
])
