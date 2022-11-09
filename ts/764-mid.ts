
/**
 * 参考－－从一维推二维
 * @param n 
 * @param mines 
 * @returns 
 */
function orderOfLargestPlusSign(n: number, mines: number[][]): number {
  const graph = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity))
  for (const [x, y] of mines) {
    graph[x][y] = 0
  }

  for (let i = 0; i < n; i++) {
    let up = 0, down = 0, left = 0, right = 0
    for (let j = 0, k = n - 1; j < n; j++, k--) {
      left = graph[i][j] === 0 ? 0 : left + 1
      right = graph[i][k] === 0 ? 0 : right + 1
      up = graph[j][i] === 0 ? 0 : up + 1
      down = graph[k][i] === 0 ? 0 : down + 1

      graph[i][j] = Math.min(graph[i][j], left)
      graph[i][k] = Math.min(graph[i][k], right)
      graph[j][i] = Math.min(graph[j][i], up)
      graph[k][i] = Math.min(graph[k][i], down)
    }
  }

  let res = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      res = Math.max(res, graph[i][j])
    }
  }

  return res
};

orderOfLargestPlusSign(5, [[4, 2]])