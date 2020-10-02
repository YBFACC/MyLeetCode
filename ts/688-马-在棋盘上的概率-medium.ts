/*
 * @lc app=leetcode.cn id=688 lang=typescript
 *
 * [688] “马”在棋盘上的概率
 */

// @lc code=start
//自己--DFS+记忆化-累加还在棋盘的概率
function knightProbability(N: number, K: number, r: number, c: number): number {
  if (K === 0) return 1
  let res = 0
  const map = new Map()
  const dfs = function (x: number, y: number, _K: number, temp: number): number {
    const path = `${x}-${y}-${_K}`
    if (map.has(path)) {
      res += map.get(path)
      return map.get(path)
    }
    if (_K > K) {
      res += temp
      return temp
    }
    if (x < 0 || x >= N || y < 0 || y >= N) {
      return 0
    }
    let floor = 0
    floor += dfs(x + 2, y + 1, _K + 1, temp / 8)
    floor += dfs(x + 2, y - 1, _K + 1, temp / 8)
    floor += dfs(x - 2, y + 1, _K + 1, temp / 8)
    floor += dfs(x - 2, y - 1, _K + 1, temp / 8)
    floor += dfs(x + 1, y + 2, _K + 1, temp / 8)
    floor += dfs(x - 1, y + 2, _K + 1, temp / 8)
    floor += dfs(x + 1, y - 2, _K + 1, temp / 8)
    floor += dfs(x - 1, y - 2, _K + 1, temp / 8)

    map.set(path, floor)
    return floor
  }
  dfs(r, c, 0, 1)

  return res
};
// @lc code=end

console.log(knightProbability(3, 2, 0, 0))