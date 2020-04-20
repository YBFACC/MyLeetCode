/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * 参考--bfs-类腐烂橘子--性能一般
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid.length < 1) return 0
  let res = 0
  let row = grid.length
  let col = grid[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '1') {
        func(i, j)
        res++
      }
    }
  }
  function func(i, j) {
    grid[i][j] = '2'
    let bfs = [[i, j]]
    while (bfs.length > 0) {
      let curr = bfs.shift()
      let wary = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ]
      for (let i = 0; i < 4; i++) {
        let r = curr[0] + wary[i][0]
        let l = curr[1] + wary[i][1]

        if (r < 0 || r >= row || l < 0 || l >= col || grid[r][l] !== '1')
          continue
        grid[r][l] = '2'
        bfs.push([r, l])
      }
    }
  }

  return res
}
// @lc code=end
