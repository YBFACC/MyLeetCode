/*
 * @lc app=leetcode.cn id=910 lang=typescript
 *
 * [910] 最小差值 II
 */

//参考--x-y轴图，找出最值

// @lc code=start
function smallestRangeII(A: number[], K: number): number {
  if (A.length <= 1) return 0
  A.sort((a, b) => a - b)
  const Len = A.length
  let res = A[Len - 1] - A[0]
  for (let i = 0; i < Len; i++) {
    var max = Math.max(A[Len - 1] - K, A[i] + K)
    var min = Math.min(A[0] + K, A[i + 1] - K)
    res = Math.max(res, max - min)
  }
  return res
};
// @lc code=end

