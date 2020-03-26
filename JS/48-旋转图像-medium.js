/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * 自己--层层转边--性能好
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  if (matrix.length < 2) return
  let start = 0
  let end = matrix.length - 1
  const func = function(start, end, num) {
    for (let i = 0; i < num; i++) {
      let temp = matrix[end - i][start]
      matrix[end - i][start] = matrix[end][end - i]
      matrix[end][end - i] = matrix[start + i][end]
      matrix[start + i][end] = matrix[start][start + i]
      matrix[start][start + i] = temp
    }
  }

  while (start < end) {
    func(start, end, end - start)
    start++
    end--
  }
  return
}
// @lc code=end

rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
])
