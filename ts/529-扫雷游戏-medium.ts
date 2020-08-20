/*
 * @lc app=leetcode.cn id=529 lang=typescript
 *
 * [529] 扫雷游戏
 */

// @lc code=start
//自己--类岛屿问题--去重BFS
function updateBoard(board: string[][], click: number[]): string[][] {
  const x = click[0]
  const y = click[1]
  if (board[x][y] === 'M') {
    board[x][y] = 'X'
    return board
  }
  const rowLimit = board.length
  const colLimit = board[0].length
  const visited = new Set()
  const ways = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ]
  const dfs = function (x: number, y: number): number {
    if (board[x][y] === 'M' || board[x][y] === 'X') return 1
    const str = `${x},${y}`
    if (board[x][y] !== 'E' || visited.has(str)) return 0
    visited.add(str)
    let count = 0
    for (const way of ways) {
      const r = way[0] + x
      const c = way[1] + y
      if (r < 0 || r >= rowLimit || c < 0 || c >= colLimit) continue
      if (board[r][c] === 'M' || board[r][c] === 'X') count++
    }
    if (count === 0) {
      for (const way of ways) {
        const r = way[0] + x
        const c = way[1] + y
        if (
          r < 0 ||
          r >= rowLimit ||
          c < 0 ||
          c >= colLimit ||
          visited.has(`${r},${c}`)
        )
          continue
        dfs(r, c)
      }
      board[x][y] = 'B'
    } else {
      board[x][y] = count + ''
    }
    return 0
  }
  dfs(x, y)
  return board
}
// @lc code=end
updateBoard(
  [
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'M'],
    ['E', 'E', 'M', 'E', 'E', 'E', 'E', 'E'],
    ['M', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'M', 'M', 'E', 'E', 'E', 'E']
  ],
  [0, 0]
)
