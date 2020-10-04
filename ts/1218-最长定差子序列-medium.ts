/*
 * @lc app=leetcode.cn id=1218 lang=typescript
 *
 * [1218] 最长定差子序列
 */

// @lc code=start
//参考--dp-数组处理负数-偏置处理
function longestSubsequence(arr: number[], difference: number): number {
  if (arr.length === 0) return 0
  const Len = arr.length
  const dp = new Int32Array(200000)
  let res = 1

  for (let i = 0; i < Len; i++) {
    const index = arr[i] + 100000
    dp[index] = dp[index - difference] + 1
    res = Math.max(res, dp[index])
  }

  return res
};
// @lc code=end

//4
console.log(longestSubsequence([1, 5, 7, 8, 5, 3, 4, 2, 1], -2))
//2
longestSubsequence([3, 4, -3, -2, -4], -5)

longestSubsequence([1, 2, 3, 4], 1)