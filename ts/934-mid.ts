
/**
 * 提示
 * DFS找到一个岛标记为２，ＢＦＳ不断外扩确定距离
 * @param grid 
 * @returns 
 */
function shortestBridge(grid: number[][]): number {
  const n = grid.length

  const DFS = (x: number, y: number) => {
    if (x < 0 || x >= n || y < 0 || y >= n) return
    if (grid[x][y] === 1) {
      grid[x][y] = 2
      DFS(x - 1, y)
      DFS(x + 1, y)
      DFS(x, y - 1)
      DFS(x, y + 1)
    }
  }
  const BFS = (): number => {
    let list: number[][] = []

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1) {
          list.push([i, j])
        }
      }
    }

    let count = 0
    while (list.length > 0) {
      const temp: number[][] = []
      while (list.length > 0) {
        const [X, Y] = list.pop() as [number, number]

        if (X + 1 < n && grid[X + 1][Y] === 2) {
          return count
        }
        if (X - 1 >= 0 && grid[X - 1][Y] === 2) {
          return count
        }
        if (Y + 1 < n && grid[X][Y + 1] === 2) {
          return count
        }
        if (Y - 1 >= 0 && grid[X][Y - 1] === 2) {
          return count
        }

        if (X + 1 < n && grid[X + 1][Y] === 0) {
          temp.push([X + 1, Y])
          grid[X + 1][Y] = 1
        }
        if (X - 1 >= 0 && grid[X - 1][Y] === 0) {
          temp.push([X - 1, Y])
          grid[X - 1][Y] = 1
        }
        if (Y + 1 < n && grid[X][Y + 1] === 0) {
          temp.push([X, Y + 1])
          grid[X][Y + 1] = 1
        }
        if (Y - 1 >= 0 && grid[X][Y - 1] === 0) {
          temp.push([X, Y - 1])
          grid[X][Y - 1] = 1
        }
      }
      list = temp
      count++
    }


    return count
  }


  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        DFS(i, j)
        return BFS()
      }
    }
  }

  return -1
};

shortestBridge([[0, 1, 0], [0, 0, 0], [0, 0, 1]])
shortestBridge([[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]])