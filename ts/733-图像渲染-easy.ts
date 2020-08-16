/*
 * @lc app=leetcode.cn id=733 lang=typescript
 *
 * [733] 图像渲染
 */

// @lc code=start
//自己--DFS
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  const target = image[sr][sc]
  const rowLimit = image.length
  const colLimit = image[0].length
  const visited = new Set()

  function dfs(i: number, j: number): any {
    let str = `${i},${j}`
    if (i < 0 || i >= rowLimit || j < 0 || j >= colLimit || visited.has(str))
      return
    visited.add(str)
    if (image[i][j] !== target) return
    image[i][j] = newColor
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }
  dfs(sr, sc)

  return image
}
// @lc code=end
floodFill(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
  ],
  1,
  1,
  2
)
