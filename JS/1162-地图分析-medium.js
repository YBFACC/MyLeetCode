/*
 * @lc app=leetcode.cn id=1162 lang=javascript
 *
 * [1162] 地图分析
 */

// @lc code=start
/**
 * 参考--跟腐烂的橘子题相似-bfs
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  if (grid.length === 0) return -1
  let N = grid.length
  let land = []
  let res = -1
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] == 1) land.push([i, j])
    }
  }
  if (land.length === N ** 2 || land.length === 0) return -1
  while (land.length > 0) {
    let size = land.length
    while (size > 0) {
      size--
      let curr = land.shift()
      let ways = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
      ]
      for (let i = 0; i < 4; i++) {
        let r = curr[0] + ways[i][0],
          c = curr[1] + ways[i][1]

        if (r < 0 || r >= N || c < 0 || c >= N || grid[r][c] === 1) continue

        // 如果找到的是海洋，继续加入到队列中
        if (grid[r][c] === 0) {
          land.push([r, c])
          grid[r][c] = 1
        }
      }
    }
    res++
  }
  return res
}

// @lc code=end

maxDistance([
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1]
])
