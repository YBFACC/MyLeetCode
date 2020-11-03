/*
 * @lc app=leetcode.cn id=930 lang=typescript
 *
 * [930] 和相同的二元子数组
 */
//参考--滑窗
// @lc code=start
function numSubarraysWithSum(A: number[], S: number): number {
  let left = 0
  let right = 0
  let sum = 0
  let res = 0
  const Len = A.length
  while (right < Len) {
    sum += A[right]
    while (sum > S) {
      sum -= A[left]
      left++
    }
    if (sum === S) {
      let start = left, limit = sum
      while (start < right && limit === sum) {
        limit -= A[start]
        res++
        start++
      }
    }
    right++
  }
  return res
}
// @lc code=end

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2))