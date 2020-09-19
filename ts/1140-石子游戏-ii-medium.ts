/*
 * @lc app=leetcode.cn id=1140 lang=typescript
 *
 * [1140] 石子游戏 II
 */

// @lc code=start
//自己--博弈类-dp改DFS--剪枝
function stoneGameII(piles: number[]): number {
  const Len = piles.length
  const list = Array.from({ length: Len + 1 }, () => 0)

  for (let i = Len - 1; i >= 0; i--) {
    list[i] += list[i + 1] + piles[i]
  }
  const map = new Map()
  const dfs = function (list: number[], index: number, m: number) {
    const path = `${index},${m}`
    if (map.has(path)) return map.get(path)
    if (index + m * 2 >= Len) return list[index]
    let min = Number.MAX_VALUE
    for (let x = 1; x <= m * 2; x++) {
      min = Math.min(min, dfs(list, index + x, Math.max(x, m)))
    }
    const max = list[index] - min
    map.set(path, max)
    return max
  }

  return dfs(list, 0, 1)
};

// @lc code=end
console.log(stoneGameII([2, 7, 9, 4, 4]))
