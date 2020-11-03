/*
 * @lc app=leetcode.cn id=930 lang=typescript
 *
 * [930] 和相同的二元子数组
 */
//参考--atMost-前缀和母题5
// @lc code=start
function numSubarraysWithSum(A: number[], S: number): number {
  return atMost(A, S) - atMost(A, S - 1)
}
function atMost(A: number[], S: number): number {
  if (S < 0) return 0
  let res = 0
  let left = 0
  for (let i = 0; i < A.length; i++) {
    S -= A[i]
    while (S < 0) {
      S += A[left++]
    }
    res += i - left + 1
  }
  return res
}
// @lc code=end

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2))