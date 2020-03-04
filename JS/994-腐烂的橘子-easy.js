/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * 参考--这个bfs有点秀--性能一般
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let fresh = []
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        fresh.push([i, j])
      }
    }
  }
  let minutes = 0
  while (fresh.length) {
    let next = []
    let rot = []

    for (let k = 0; k < fresh.length; k++) {
      let i = fresh[k][0]
      let j = fresh[k][1]
      if (
        (grid[i - 1] && grid[i - 1][j] === 2) ||
        (grid[i + 1] && grid[i + 1][j] === 2) ||
        grid[i][j - 1] === 2 ||
        grid[i][j + 1] === 2
      ) {
        rot.push([i, j])
      } else {
        next.push([i, j])
      }
    }
    if (!rot.length) {
      return -1
    }
    for (let i = 0; i < rot.length; i++) {
      grid[rot[i][0]][rot[i][1]] = 2
    }
    fresh=next
    minutes++
  }
  return minutes
}

// @lc code=end

orangesRotting([[1, 2, 1, 1, 2, 1, 1]])
