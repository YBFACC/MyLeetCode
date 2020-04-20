/**
 * 参考79题--dfs--性能一般
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (board.length === 0 || word.length === 0) return false
  let row = board.length
  let col = board[0].length
  let res = false
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === word[0]) {
        func(i, j, 0)
      }
    }
  }
  function func(i, j, index) {
    if (res) return
    if (i < 0 || i >= row || j < 0 || j >= col || word[index] !== board[i][j])
      return
    if (!res && index === word.length - 1) {
      res = true
    }
    let temp = board[i][j]
    board[i][j] = '.'
    func(i + 1, j, index + 1)
    func(i - 1, j, index + 1)
    func(i, j + 1, index + 1)
    func(i, j - 1, index + 1)
    board[i][j] = temp
  }

  return res
}
