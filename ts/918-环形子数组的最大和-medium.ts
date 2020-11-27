/*
 * @lc app=leetcode.cn id=918 lang=typescript
 *
 * [918] 环形子数组的最大和
 */

//参考--环形-A+A
//官方--前缀和 + 单调队列

// @lc code=start
function maxSubarraySumCircular(A: number[]): number {
  if (A.length === 1) return A[0]
  const limit = A.length
  let res = Number.MIN_SAFE_INTEGER
  A.push(...A)
  const preSum = [0]
  for (let i = 0; i < A.length; i++) {
    preSum[i + 1] = preSum[i] + A[i]
  }

  const queue = [0]

  for (let i = 1; i < preSum.length; i++) {
    if (queue.length > 0 && i - limit > queue[0]) queue.shift()
    if (queue.length > 0) res = Math.max(res, preSum[i] - preSum[queue[0]])
    while (queue.length > 0 && preSum[queue[queue.length - 1]] >= preSum[i]) {
      queue.pop()
    }
    queue.push(i)
  }

  return res
};
// @lc code=end

//16
maxSubarraySumCircular([0, 5, 8, -9, 9, -7, 3, -2])
//3
maxSubarraySumCircular([1, -2, 3, -2])
//19
maxSubarraySumCircular([2, -2, 2, 7, 8, 0])
//-1
maxSubarraySumCircular([-2, -3, -1])

maxSubarraySumCircular([5, -3, 5])

maxSubarraySumCircular([3, -1, 2, -1])

maxSubarraySumCircular([3, -2, 2, -3])