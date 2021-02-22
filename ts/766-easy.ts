/*
 * @lc app=leetcode.cn id=766 lang=typescript
 *
 * [766] 托普利茨矩阵
 */
//逃课-前行中除最后一个元素外剩余的元素完全等于后行中除第一个元素外剩余的元素

// @lc code=start
function isToeplitzMatrix(matrix: number[][]): boolean {
  const m = matrix.length, n = matrix[0].length;
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          if (matrix[i][j] != matrix[i - 1][j - 1]) {
              return false;
          }
      }
  }
  return true;
};
// @lc code=end

