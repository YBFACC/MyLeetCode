/*
 * @lc app=leetcode.cn id=576 lang=typescript
 *
 * [576] 出界的路径数
 */

// @lc code=start
//参考--DFS-记忆化
function findPaths(m: number, n: number, N: number, i: number, j: number): number {
  const map = new Map()

  const dfs = function (I: number, J: number, depth: number): number {
    const path = `${I},${J},${depth}`
    if (map.has(path)) return map.get(path)
    if (depth > N) return 0
    if (I < 0 || I >= m || J < 0 || J >= n) {
      return 1
    }
    let floor = 0
    floor += dfs(I + 1, J, depth + 1)
    floor += dfs(I, J + 1, depth + 1)
    floor += dfs(I - 1, J, depth + 1)
    floor += dfs(I, J - 1, depth + 1)
    floor %= (1000000000 + 7)
    map.set(path, floor)
    return floor
  }

  return dfs(i, j, 0)
};
// @lc code=end

console.log(findPaths(36, 5, 50, 15, 3))

console.log(findPaths(8, 50, 23, 5, 26))

console.log(findPaths(1, 3, 3, 0, 1))

console.log(findPaths(2, 2, 2, 0, 0))