/*
 * @lc app=leetcode.cn id=992 lang=typescript
 *
 * [992] K 个不同整数的子数组
 */

//重做--离散化

// @lc code=start
function subarraysWithKDistinct(A: number[], K: number): number {
  return helper(A, K) - helper(A, K - 1)
};
function helper(A: number[], K: number): number {
  const Len = A.length
  const map = new Int32Array(Len + 1)
  let left = 0, right = 0
  let count = 0, res = 0
  while (right < Len) {
    if (map[A[right]]++ == 0) count++
    while (count > K) {
      if (--map[A[left++]] == 0) count--
    }
    res += right - left + 1
    right++
  }
  return res
}
// @lc code=end

console.log(
  subarraysWithKDistinct([1, 2, 1, 2, 3]
    , 2))