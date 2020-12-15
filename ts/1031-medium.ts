/*
 * @lc app=leetcode.cn id=1031 lang=typescript
 *
 * [1031] 两个非重叠子数组的最大和
 */

//提示--前缀和--固定一边dp最大值，枚举另一边

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

  const left_L = new Int32Array(Len)
  const right_L = new Int32Array(Len)

  let count = 0
  for (let i = 0; i < Len; i++) {
    count += i >= L ? A[i] - A[i - L] : A[i]
    left_L[i] = i >= L - 1 ? Math.max(left_L[i - 1] || 0, count) : 0
  }

  count = 0
  for (let i = Len - 1; i >= 0; i--) {
    count += i < Len - L ? A[i] - A[i + L] : A[i]
    right_L[i] = i < Len - L + 1 ? Math.max(right_L[i + 1] || 0, count) : 0
  }


  for (let i = 0; i + M <= Len; i++) {
    const M_value = helper(preSum, i, i + M)
    const temp = Math.max(left_L[i - 1] || 0, right_L[i + M + 1] || 0)
    res = Math.max(res, temp + M_value)
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
