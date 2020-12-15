/*
 * @lc app=leetcode.cn id=1031 lang=typescript
 *
 * [1031] 两个非重叠子数组的最大和
 */

//提示--前缀和--先固定M求得L的最大值

// @lc code=start
function maxSumTwoNoOverlap(A: number[], L: number, M: number): number {
  if (A.length === L + M) {
    return A.reduce((pre, curr) => pre + curr, 0)
  }
  let res = 0
  const Len = A.length
  const preSum = [0]
  for (let i = 0; i < Len; i++) {
    preSum[i + 1] = preSum[i] + A[i]
  }

  for (let i = 0; i + M <= Len; i++) {
    const M_value = helper(preSum, i, i + M)
    for (let j = 0; j + L < i; j++) {
      const L_value = helper(preSum, j, j + L)
      res = Math.max(res, M_value + L_value)
    }
    for (let j = i + M; j + L <= Len; j++) {
      const L_value = helper(preSum, j, j + L)
      res = Math.max(res, M_value + L_value)
    }
  }

  return res
};

function helper(preSum: number[], start: number, end: number): number {
  return preSum[end] - preSum[start]
}
// @lc code=end

maxSumTwoNoOverlap([2, 1, 5, 6, 0, 9, 5, 0, 3, 8], 4, 3)
maxSumTwoNoOverlap([0, 6, 5, 2, 2, 5, 1, 9, 4], 1, 2)

maxSumTwoNoOverlap([3, 8, 1, 3, 2, 1, 8, 9, 0], 3, 2)
