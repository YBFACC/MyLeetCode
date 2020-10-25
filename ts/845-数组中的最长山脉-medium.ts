/*
 * @lc app=leetcode.cn id=845 lang=typescript
 *
 * [845] 数组中的最长山脉
 */

// @lc code=start
//参考--记录递增和递减的长度
function longestMountain(A: number[]): number {
  const Len = A.length
  if (Len === 0) return 0

  const left = Array.from({ length: Len }, () => 0)
  for (let i = 1; i < Len; i++) {
    left[i] = A[i] > A[i - 1] ? left[i - 1] + 1 : 0
  }
  const right = Array.from({ length: Len }, () => 0)
  for (let i = Len - 1; i > 0; i--) {
    right[i] = A[i] > A[i + 1] ? right[i + 1] + 1 : 0
  }

  let res = 0
  for (let i = 0; i < Len; i++) {
    if (left[i] > 0 && right[i] > 0) {
      res = Math.max(res, right[i] + left[i] + 1)
    }
  }
  return res
};

// @lc code=end

longestMountain([2, 2, 2])

longestMountain([2, 1, 4, 7, 3, 2, 5])