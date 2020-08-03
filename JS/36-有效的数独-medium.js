/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * 自己--遍历
 * 不需要像困难那样，解数独
 * 只需要验证已存在的数字是否符合数独规则
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const row = Array.from({ length: 9 }, () => new Object())
  const col = Array.from({ length: 9 }, () => new Object())
  const list_9 = Array.from({ length: 9 }, () => new Object())

  let list = []
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        list.push([i, j])
        continue
      }
      if (
        row[i][board[i][j]] ||
        col[j][board[i][j]] ||
        list_9[getindex(i, j)][board[i][j]]
      ) {
        return false
      }
      row[i][board[i][j]] = true
      col[j][board[i][j]] = true
      list_9[getindex(i, j)][board[i][j]] = true
    }
  }

  return true
}
function getindex(i, j) {
  const _i = Math.floor(i / 3)
  const _j = Math.floor(j / 3)
  return _i * 3 + _j
}
// @lc code=end

console.log(
  isValidSudoku([
    ['.', '.', '.', '3', '.', '.', '.', '.', '.'],
    ['.', '.', '2', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '9', '.', '.', '.', '.'],
    ['1', '.', '.', '.', '.', '7', '8', '4', '.'],
    ['.', '.', '.', '.', '.', '1', '.', '3', '.'],
    ['.', '.', '.', '.', '.', '8', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '3'],
    ['.', '.', '.', '.', '.', '.', '.', '9', '2']
  ])
)
