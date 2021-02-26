/*
 * @lc app=leetcode.cn id=85 lang=typescript
 *
 * [85] 最大矩形
 */

//参考--84题升级版--单调栈
//从1维到2维

// @lc code=start
function maximalRectangle(matrix: string[][]): number {
  if (matrix.length === 0) return 0
  const Col = matrix[0].length
  const dp = Array.from({ length: Col }, () => 0)
  let res = 0
  for (const row of matrix) {
    for (let i = 0; i < Col; i++) {
      dp[i] = row[i] === '1' ? dp[i] + 1 : 0
    }
    res = Math.max(res, largestRectangleArea(dp))
  }
  return res
};

function largestRectangleArea(heights: number[]) {
  heights = [0, ...heights, 0]
  let max = 0
  const stack = []
  const Len = heights.length
  for (let i = 0; i < Len; i++) {
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      const top = stack.pop() as number
      max = Math.max(max,
        heights[top] * (i - 1 - stack[stack.length - 1]))
    }
    stack.push(i)
  }
  return max
}
// @lc code=end


maximalRectangle([
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0']
])
