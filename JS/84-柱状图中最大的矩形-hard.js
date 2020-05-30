/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * 自己--暴力法
 * @param {number[]} heights
 * @return {number}
 */
// var largestRectangleArea = function (heights) {
//   let res = 0
//   for (let i = 0; i < heights.length; i++) {
//     let count = 1
//     let left = i - 1
//     while (left >= 0) {
//       if (heights[i] > heights[left]) {
//         break
//       }
//       count++
//       left--
//     }
//     let right = i + 1
//     while (right < heights.length) {
//       if (heights[i] > heights[right]) {
//         break
//       }
//       count++
//       right++
//     }
//     res = Math.max(res, count * heights[i])
//   }
//   return res
// }
// @lc code=end

/**
 * copy--单调栈
 * @param {number[]} heights
 * @return {number}
 */
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

largestRectangleArea([5, 5, 1, 7, 1, 1, 5, 2, 7, 6])
