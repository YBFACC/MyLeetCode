/*
 * @lc app=leetcode.cn id=1030 lang=typescript
 *
 * [1030] 距离顺序排列矩阵单元格
 */

// @lc code=start
//参考--距离当成map的key
function allCellsDistOrder(R: number, C: number, r0: number, c0: number): number[][] {

  const map = new Map()
  let max = 0
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      const dic = Math.abs(i - r0) + Math.abs(j - c0)
      max = Math.max(max, dic)
      if (!map.has(dic)) {
        map.set(dic, [])
      }
      map.get(dic).push([i, j])
    }
  }
  const res: number[][] = []
  for (let i = 0; i <= max; i++) {
    if (!map.has(i)) continue
    res.push(...map.get(i))
  }
  return res
};
// @lc code=end

allCellsDistOrder(2, 3, 1, 2)