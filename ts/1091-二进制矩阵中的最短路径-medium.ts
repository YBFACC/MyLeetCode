/*
 * @lc app=leetcode.cn id=1091 lang=typescript
 *
 * [1091] 二进制矩阵中的最短路径
 */

// @lc code=start
//自己--DFS思路错误
//剪枝失败--当前节点向前搜索时，可能往回方向记录无关节点
function shortestPathBinaryMatrix(grid: number[][]): number {
  const map = new Map()
  const Len = grid.length
  const ways = [[1, 1], [0, 1], [1, 0], [1, -1], [-1, 1], [-1, 0], [0, -1], [-1, -1]]

  const dfs = function (x: number, y: number): number {
    const path = `${x}-${y}`
    if (grid[x][y] === 1) return Infinity
    if (x === Len - 1 && y === Len - 1) return 1
    if (map.has(path)) return map.get(path)
    grid[x][y] = 1
    let floor = Infinity
    for (const [_x, _y] of ways) {
      const X = x + _x, Y = y + _y
      if (X < 0 || X >= Len || Y < 0 || Y >= Len) continue
      floor = Math.min(floor, dfs(X, Y) + 1)
    }

    map.set(path, floor)
    grid[x][y] = 0
    return floor
  }
  let res = dfs(0, 0)
  return res === Infinity ? -1 : res
};
// @lc code=end
//7
console.log(shortestPathBinaryMatrix([
  [0, 0, 0, 0, 1, 1],
  [0, 1, 0, 0, 1, 0],
  [1, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1],
  [0, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 0, 0]]))
//4
console.log(shortestPathBinaryMatrix([
  [0, 0, 0, 0],
  [1, 0, 0, 1],
  [0, 1, 0, 0],
  [0, 0, 0, 0]]))

//10
console.log(shortestPathBinaryMatrix([
  [0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 0],
  [1, 0, 0, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 0]]))

//6
console.log(shortestPathBinaryMatrix([
  [0, 0, 1, 0, 1, 1],
  [1, 0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0, 0],
  [1, 0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0]
]))

//-1
console.log(shortestPathBinaryMatrix([
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 1]
]))
//4
console.log(shortestPathBinaryMatrix([[0, 0, 0], [1, 1, 0], [1, 1, 0]]))
//2
console.log(shortestPathBinaryMatrix([[0, 1], [1, 0]]))