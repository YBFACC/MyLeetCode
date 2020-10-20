/*
 * @lc app=leetcode.cn id=1091 lang=typescript
 *
 * [1091] 二进制矩阵中的最短路径
 */

// @lc code=start
//提示--BFS--模版题
function shortestPathBinaryMatrix(grid: number[][]): number {
  const Len = grid.length
  if (grid[0][0] === 1) return -1
  if (Len === 1) return 1
  const ways = [[1, 1], [0, 1], [1, 0], [1, -1], [-1, 1], [-1, 0], [0, -1], [-1, -1]]
  const set = new Set()
  let res = 1
  let bfs = [[0, 0]]
  while (bfs.length > 0) {
    let size = bfs.length
    res++
    while (size-- > 0) {
      const [x, y] = bfs.shift() as number[]
      const Path = `${x}-${y}`
      set.add(Path)
      for (const [_x, _y] of ways) {
        const X = x + _x, Y = y + _y
        if (set.has(`${X}-${Y}`) || X < 0 || X >= Len || Y < 0 || Y >= Len || grid[X][Y] === 1) continue
        if (X === Len - 1 && Y === Len - 1) return res
        set.add(`${X}-${Y}`)
        bfs.push([X, Y])
      }
    }
  }

  return -1
};
// @lc code=end
console.log(shortestPathBinaryMatrix([
  [1, 0, 0],
  [1, 1, 0],
  [1, 1, 0]
]))

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