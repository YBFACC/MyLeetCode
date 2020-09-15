/*
 * @lc app=leetcode.cn id=310 lang=typescript
 *
 * [310] 最小高度树
 */

// @lc code=start
//参考--拓扑超时--贪心-每次去除最外侧度为1度的节点
function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n < 2) return [0]
  const list: Array<Set<number>> = Array.from({ length: n }, () => new Set())
  const res: number[] = []
  for (const edge of edges) {
    const [from, to] = edge
    list[from]?.add(to)
    list[to]?.add(from)
  }
  const queue: number[] = []
  for (let i = 0; i < n; i++) {
    if (list[i].size === 1) queue.push(i)
  }
  while (n > 2) {
    let size = queue.length
    n -= size
    while (size-- > 0) {
      const curr = queue.shift() as number

      if (list[curr].size === 0) continue
      for (const item of list[curr] as Set<number>) {
        list[item].delete(curr)
        if (list[item].size === 1) queue.push(item)
      }
    }
  }
  while (queue.length > 0) {
    res.push(queue.pop() as number)
  }
  return res
};
// @lc code=end

console.log(findMinHeightTrees(1
  , []))