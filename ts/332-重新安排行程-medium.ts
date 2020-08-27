/*
 * @lc app=leetcode.cn id=332 lang=typescript
 *
 * [332] 重新安排行程
 */

// @lc code=start
//参考--Hierholzer算法-欧拉路径
function findItinerary(tickets: string[][]): string[] {
  const res: string[] = []
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

  const dfs = function (from: string) {
    const nextNode = map.get(from)
    while (nextNode && nextNode.length > 0) {
      const next = nextNode.shift()
      dfs(next)
    }
    res.unshift(from)
  }
  dfs('JFK')
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
