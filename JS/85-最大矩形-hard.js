/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */


// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (matrix.length === 0) return 0
  const col = matrix[0].length
  const dp = Array.from({ length: col }, () => 0)
  let maxArea = 0
  for (const item of matrix) {
    for (let i = 0; i < item.length; i++) {
      dp[i] = item[i] === '1' ? dp[i] + 1 : 0
    }
    maxArea = Math.max(maxArea, largestRectangleArea(dp))
  }
  return maxArea
}

const largestRectangleArea = heights => {
  let maxArea = 0
  const stack = []
  heights = [0, ...heights, 0] // ...是JS的展开运算符
  for (let i = 0; i < heights.length; i++) {
    while (heights[i] < heights[stack[stack.length - 1]]) {
      // 当前bar比栈顶bar矮
      const stackTopIndex = stack.pop() // 栈顶元素出栈，并保存栈顶bar的索引
      maxArea = Math.max(
        // 计算面积，并挑战最大面积
        maxArea, // 计算出栈的bar形成的长方形面积
        heights[stackTopIndex] * (i - stack[stack.length - 1] - 1)
      )
    }
    stack.push(i) // 当前bar比栈顶bar高了，入栈
  }
  return maxArea
}
// @lc code=end

maximalRectangle([
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0']
])
