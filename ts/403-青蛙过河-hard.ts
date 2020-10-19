/*
 * @lc app=leetcode.cn id=403 lang=typescript
 *
 * [403] 青蛙过河
 */

// @lc code=start
//自己--DFS+memo
function canCross(stones: number[]): boolean {
  const Len = stones.length
  let res = false
  const map = new Map()
  const dfs = function (index: number, jump: number) {
    if (res) return
    if (index === Len - 1) {
      res = true
      return
    }
    const path = `${index}-${jump}`
    if (map.has(path)) return false
    const Max = stones[index] + jump + 1
    let next = index
    while (stones[++next] <= Max) {

      if (stones[next] === stones[index] + jump) {
        dfs(next, jump)
      }
      if (stones[next] === stones[index] + jump + 1) {
        dfs(next, jump + 1)
      }
      if (stones[next] === stones[index] + jump - 1) {
        dfs(next, jump - 1)
      }
    }
    map.set(path, false)
    return false
  }
  dfs(0, 0)

  return res
};
// @lc code=end

canCross([0, 2])
canCross([0, 1, 2, 3, 4, 8, 9, 11])
canCross([0, 1, 3, 5, 6, 8, 12, 17])