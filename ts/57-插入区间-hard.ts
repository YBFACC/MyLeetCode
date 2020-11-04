/*
 * @lc app=leetcode.cn id=57 lang=typescript
 *
 * [57] 插入区间
 */
//参考-自己上次的代码😤--插入后排序，每项与栈顶比较是否有重叠部分
// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
  intervals.push(newInterval)
  intervals.sort((a, b) => a[0] - b[0])
  if (intervals.length <= 1) return intervals

  const res: number[][] = []
  for (const item of intervals) {
    const Len = res.length
    if (Len > 0 && res[Len - 1][1] >= item[0]) {
      const [res_0, res_1] = res.pop() as number[]
      const min = Math.min(res_0, item[0])
      const max = Math.max(res_1, item[1])
      res.push([min, max])
    } else {
      res.push(item)
    }
  }
  return res
};
// @lc code=end

