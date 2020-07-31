/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * 自己--回溯
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  let all = []
  const row = Array.from({ length: 9 }, () => new Object())
  const col = Array.from({ length: 9 }, () => new Object())
  const list_9 = Array.from({ length: 10 }, () => new Object())
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === '.') {
        all.push([i, j])
      } else {
        row[i][board[i][j]] = true
        col[j][board[i][j]] = true
        list_9[getnum(i, j)][board[i][j]] = true
      }
    }
  }
  let res = null

  const dfs = function (index) {
    if (index === all.length) {
      res = JSON.parse(JSON.stringify(board))
      return
    }

    const _row = all[index][0]
    const _col = all[index][1]

    for (let num = 1; num <= 9; num++) {
      if (row[_row][num] || col[_col][num] || list_9[getnum(_row, _col)][num]) {
        continue
      }
      row[_row][num] = true
      col[_col][num] = true
      list_9[getnum(_row, _col)][num] = true
      board[_row][_col] = num + ''
      dfs(index + 1)
      board[_row][_col] = '.'
      row[_row][num] = false
      col[_col][num] = false
      list_9[getnum(_row, _col)][num] = false
    }
  }
  dfs(0, 0)

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      board[i][j] = res[i][j]
    }
  }

  return
}
function getnum(i, j) {
  const _i = Math.floor(i / 3) * 3
  const _j = Math.floor(j / 3) + 1
  return _i + _j
}
// @lc code=end
solveSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
])
