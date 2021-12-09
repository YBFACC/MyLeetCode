/*
 * @Author: yubingfeng
 * @Date: 2021-12-07 08:54:46
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-12-07 09:52:57
 * @Description: 自己--BFS+边界上色
 */
function colorBorder(grid: number[][], row: number, col: number, color: number): number[][] {
  const target = grid[row][col]
  grid[row][col] = - grid[row][col]
  const rowLen = grid.length, colLen = grid[0].length
  let bfs = [`${row},${col}`]
  while (bfs.length > 0) {
    let size = bfs.length
    while (size-- > 0) {
      let curr = bfs.shift() as string
      const arr = curr.split(',') as string[]
      const _row = +arr[0], _col = +arr[1]
      if (_row + 1 < rowLen && grid[_row + 1][_col] === target) {
        grid[_row + 1][_col] = -grid[_row + 1][_col]
        bfs.push(`${_row + 1},${_col}`)
      }
      if (_row - 1 >= 0 && grid[_row - 1][_col] === target) {
        grid[_row - 1][_col] = -grid[_row - 1][_col]
        bfs.push(`${_row - 1},${_col}`)
      }
      if (_col + 1 < colLen && grid[_row][_col + 1] === target) {
        grid[_row][_col + 1] = -grid[_row][_col + 1]
        bfs.push(`${_row},${_col + 1}`)
      }
      if (_col - 1 >= 0 && grid[_row][_col - 1] === target) {
        grid[_row][_col - 1] = -grid[_row][_col - 1]
        bfs.push(`${_row},${_col - 1}`)
      }
    }
  }
  const graph = Array.from({ length: rowLen }, () => Array.from({ length: colLen }, () => 0))
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] < 0) {
        if (i + 1 === rowLen || i - 1 < 0 || j + 1 === colLen || j - 1 < 0) {
          graph[i][j] = color
          continue
        }
        if (i + 1 < rowLen && grid[i + 1][j] > 0) {
          graph[i][j] = color
          continue
        }
        if (i - 1 >= 0 && grid[i - 1][j] > 0) {
          graph[i][j] = color
          continue
        }
        if (j + 1 < colLen && grid[i][j + 1] > 0) {
          graph[i][j] = color
          continue
        }
        if (j - 1 >= 0 && grid[i][j - 1] > 0) {
          graph[i][j] = color
          continue
        }
        graph[i][j] = -grid[i][j]
      } else {
        graph[i][j] = grid[i][j]
      }
    }
  }
  return graph
};
colorBorder([[1, 2, 2], [2, 3, 2]], 0, 1, 3)
colorBorder([[1, 1, 1], [1, 1, 1], [1, 1, 1]], 1, 1, 2)