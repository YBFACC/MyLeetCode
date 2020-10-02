/*
 * @lc app=leetcode.cn id=808 lang=typescript
 *
 * [808] 分汤
 */

// @lc code=start
function soupServings(N: number): number {
  let res = 0
  const map = new Map()
  const dfs = function (A: number, B: number, probability: number) {
    const path = `${A}-${B}`
    if (map.has(path)) {
      res += map.get(path)
      return map.get(path)
    }
    if (A <= 0 && B <= 0) {
      res += probability / 2
      return probability / 2
    }
    if (A <= 0) {
      res += probability
      return probability
    }
    if (B <= 0) {
      return 0
    }
    let floor = 0
    floor += dfs(A - 100, B, probability / 4)
    floor += dfs(A - 75, B - 25, probability / 4)
    floor += dfs(A - 50, B - 50, probability / 4)
    floor += dfs(A - 25, B - 75, probability / 4)

    map.set(path, floor)

    return floor
  }
  dfs(N, N, 10000)

  return res / 10000
};

// @lc code=end

soupServings(660295675)