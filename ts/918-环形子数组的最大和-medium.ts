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

//copy--统计[0,i]和[j,A.length]的统计连续最大值

function maxSubarraySumCircular1(A: number[]): number {
  const N = A.length
  let ans = A[0]
  let curr = A[0]

  //不需要循环就得到最大值
  for (let i = 1; i < N; i++) {
    curr = A[i] + Math.max(curr, 0)
    ans = Math.max(ans, curr)
  }

  //统计[j,A.length]的连续数组最大值
  const rightsums = []
  rightsums[N - 1] = A[N - 1];
  const maxright = []//得到[j,A.length]的最大值
  maxright[N - 1] = A[N - 1];
  for (let i = N - 2; i >= 0; --i) {
    rightsums[i] = rightsums[i + 1] + A[i];
    maxright[i] = Math.max(maxright[i + 1], rightsums[i]);
  }

  let leftsum = 0;
  for (let i = 0; i < N - 2; ++i) {
    leftsum += A[i];
    ans = Math.max(ans, leftsum + maxright[i + 2]);
  }

  return ans
};


// @lc code=end

maxSubarraySumCircular1([3, -2, 2, -3])

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