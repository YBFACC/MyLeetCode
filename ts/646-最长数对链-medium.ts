/*
 * @lc app=leetcode.cn id=646 lang=typescript
 *
 * [646] 最长数对链
 */

// @lc code=start
//参考--类LIS问题--升序问题-dp记录值
function findLongestChain(pairs: number[][]): number {
  const Len = pairs.length
  const dp = Int16Array.from({ length: Len }, () => 1)
  pairs.sort((a, b) => a[0] - b[0])
  let res = 1
  for (let i = 0; i < Len; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[i][0] > pairs[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
        res = Math.max(res, dp[i])
      }
    }
  }
  return res
};
// @lc code=end

findLongestChain([[1, 2], [2, 3], [3, 4]])