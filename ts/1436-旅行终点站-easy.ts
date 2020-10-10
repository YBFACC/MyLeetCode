/*
 * @lc app=leetcode.cn id=1436 lang=typescript
 *
 * [1436] 旅行终点站
 */

// @lc code=start
//自己--统计出度为0的节点
function destCity(paths: string[][]): string {
  const OutGraph = new Map()
  for (const [from, to] of paths) {
    if (!OutGraph.has(from)) {
      OutGraph.set(from, 0)
    }
    if (!OutGraph.has(to)) {
      OutGraph.set(to, 0)
    }
    OutGraph.set(from, OutGraph.get(from) + 1)
  }
  let res!: string
  OutGraph.forEach((v, k) => {
    if (v === 0) {
      res = k
    }
  })
  return res
};
// @lc code=end

destCity([["B", "C"], ["D", "B"], ["C", "A"]])
