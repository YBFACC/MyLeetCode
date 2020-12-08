/*
 * @lc app=leetcode.cn id=861 lang=typescript
 *
 * [861] 翻转矩阵后的得分
 */

//提示--贪心--高位多是1

// @lc code=start
function matrixScore(A: number[][]): number {
  for (let i = 0; i < A.length; i++) {
    if (A[i][0] === 0) {
      col(A, i)
    }
  }
  for (let i = 0; i < A[0].length; i++) {
    let count = 0
    for (let j = 0; j < A.length; j++) {
      if (A[j][i] === 0) count++
    }
    if (count > (A.length) / 2) {
      row(A, i)
    }
  }
  let res = 0
  for (const item of A) {
    res += parseInt(item.join(''), 2)
  }
  return res
};
function col(A: number[][], index: number) {
  for (let i = 0; i < A[index].length; i++) {
    A[index][i] = A[index][i] === 0 ? 1 : 0
  }
}
function row(A: number[][], index: number) {
  for (let i = 0; i < A.length; i++) {
    A[i][index] = A[i][index] === 0 ? 1 : 0
  }
}
// @lc code=end

matrixScore([[0, 0, 1, 1], [1, 0, 1, 0], [1, 1, 0, 0]])