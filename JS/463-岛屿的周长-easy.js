/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * 自己--岛屿边长
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  
  let ways = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]
  let res = 0
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        Ways(row, col)
      }
    }
  }

  function Ways(row, col) {
    let temp = 4
    for (let i = 0; i < ways.length; i++) {
      let r = row + ways[i][0]
      let l = col + ways[i][1]
      if (
        r >= 0 &&
        r < grid.length &&
        l >= 0 &&
        l < grid[0].length &&
        grid[r][l] === 1
      ) {
        temp--
      }
    }
    res += temp
  }

  return res
}
// @lc code=end

islandPerimeter([
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]
])
