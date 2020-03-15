/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * 参考--dfs-递归--性能一般
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let res = 0
  let x = grid.length
  let y = grid[0].length
  const func = function(i, j) {
    if (i < 0 || i >= x || j < 0 || j >= y || grid[i][j] === 0) {
      return 0
    }
    let count = 1
    grid[i][j] = 0
    count += func(i + 1, j)
    count += func(i - 1, j)
    count += func(i, j - 1)
    count += func(i, j + 1)
    return count
  }

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (grid[i][j] === 1) {
        res = Math.max(func(i, j), res)
      }
    }
  }

  return res
}
// @lc code=end

maxAreaOfIsland([
  [1, 1, 0],
  [1, 0, 1],
  [1, 1, 1]
])
