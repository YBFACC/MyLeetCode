/*
 * @lc app=leetcode.cn id=332 lang=typescript
 *
 * [332] 重新安排行程
 */

// @lc code=start
//参考--需要使用完所有机票-访问完所有边
function findItinerary(tickets: string[][]): string[] {
  const res = ['JFK']
  const map = new Map()
  for (const ticket of tickets) {
    if (map.has(ticket[0])) {
      map.get(ticket[0]).push(ticket[1])
    } else {
      map.set(ticket[0], [ticket[1]])
    }
  }
  for (const item of map.values()) {
    item.sort()
  }

  const dfs = function (from: string, used: number) {
    if (used === tickets.length) {
      return true
    }
    const nextNode = map.get(from)
    if (!nextNode || nextNode.length === 0) return false
    for (let i = 0; i < nextNode.length; i++) {
      const next = nextNode[i]
      nextNode.splice(i, 1)
      res.push(next)
      if (dfs(next, used + 1)) {
        return true
      }
      nextNode.splice(i, 0, next)
      res.pop()
    }
  }
  dfs('JFK', 0)
  return res
}
// @lc code=end

console.log(
  findItinerary([
    ['JFK', 'SFO'],
    ['JFK', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'JFK'],
    ['ATL', 'SFO']
  ])
)
