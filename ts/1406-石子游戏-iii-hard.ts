/*
 * @lc app=leetcode.cn id=1406 lang=typescript
 *
 * [1406] 石子游戏 III
 */

// @lc code=start
//自己--改写为DFS
//对比上一题-中心思想一致-每次拿到最大值
function stoneGameIII(stoneValue: number[]): string {
  const piles = stoneValue
  const Len = piles.length
  const list = Array.from({ length: Len + 3 }, () => 0)
  for (let i = Len - 1; i >= 0; i--) {
    list[i] = list[i + 1] + piles[i]
  }
  const map = new Map()
  const dfs = function (index: number): number {
    if (map.has(index)) return map.get(index)
    if (index >= Len) return 0
    let floor = -Infinity
    for (let i = 1; i <= 3; i++) {
      floor = Math.max(floor, list[index] - dfs(index + i))
    }
    map.set(index, floor)
    return floor
  }
  let temp = dfs(0)

  if (list[0] === temp + temp) {
    return 'Tie'
  }
  if (list[0] - temp > temp) {
    return 'Bob'
  }
  return "Alice"
};
// @lc code=end

console.log(stoneGameIII([1, 2, 3, -1, -2, -3, 7]))