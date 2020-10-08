/*
 * @lc app=leetcode.cn id=802 lang=typescript
 *
 * [802] 找到最终的安全状态
 */

// @lc code=start
//参考--逆拓扑排序--出度表+逆邻接表
function eventualSafeNodes(graph: number[][]): number[] {
  const Len = graph.length
  const list: number[][] = Array.from({ length: Len }, () => [])
  const outGraph = new Int16Array(Len)
  const res: number[] = []
  for (let i = 0; i < Len; i++) {
    const to = graph[i]
    for (const item of to) {
      list[item].push(i)
    }
    outGraph[i] = to.length
  }
  const queue = []
  for (let i = 0; i < Len; i++) {
    if (outGraph[i] === 0) {
      queue.push(i)
    }
  }
  while (queue.length > 0) {
    const curr = queue.shift() as number
    res.push(curr)
    const to = list[curr]
    while (to.length > 0) {
      const _to = to.pop() as number
      outGraph[_to]--
      if (outGraph[_to] === 0) {
        queue.push(_to)
      }
    }
  }
  res.sort((a, b) => a - b)
  return res
};
// @lc code=end

eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []])