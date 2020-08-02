/**
 * 参考--dfs
 * 上次是dp判断是否能到
 * 这次是需要你返回对应到路径
 * @param {number[][]} obstacleGrid
 * @return {number[][]}
 */
var pathWithObstacles = function (obstacleGrid) {
  if (obstacleGrid.length === 0) return []
  const row = obstacleGrid.length
  const col = obstacleGrid[0].length
  let res = []
  const dp = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => true)
  )
  const dfs = function (i, j, temp) {
    if (res.length > 0) {
      return false
    }
    if (i >= row || j >= col) return false
    if (dp[i][j] === false) {
      return false
    }
    if (obstacleGrid[i][j] === 1) {
      dp[i][j] = false
      return false
    }
    if (i === row - 1 && j === col - 1) {
      temp.push([i, j])
      res = temp.slice()
      return true
    }
    temp.push([i, j])
    let down = dfs(i + 1, j, temp)
    let right = dfs(i, j + 1, temp)
    temp.pop()
    if (!down && !right) {
      dp[i][j] = false
      return false
    } else {
      return true
    }
  }

  dfs(0, 0, [])

  return res
}

pathWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
])
