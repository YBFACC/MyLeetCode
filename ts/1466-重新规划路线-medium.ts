/*
 * @lc app=leetcode.cn id=1466 lang=typescript
 *
 * [1466] 重新规划路线
 */
// @lc code=start
//参考--将有向图变成无向图--统计改变方向的次数
//这样所有节点都与0联通
function minReorder(n: number, connections: number[][]): number {
  const map = new Map()
  for (const [from, to] of connections) {
    if (!map.has(from)) {
      map.set(from, [])
    }
    if (!map.has(to)) {
      map.set(to, [])
    }
    map.get(from).push([to, 1])
    map.get(to).push([from, 0])
  }

  let res = 0
  const queue = [0]
  const set = new Set()
  while (queue.length > 0) {
    const curr = queue.shift()
    set.add(curr)
    for (const [city, val] of map.get(curr)) {
      if (set.has(city)) continue
      res += val
      queue.push(city)
      set.add(city)
    }
  }

  return res
};
// @lc code=end

minReorder(5, [[1,0],[1,2],[3,2],[3,4]])
