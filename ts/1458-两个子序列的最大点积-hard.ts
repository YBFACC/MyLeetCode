/*
 * @lc app=leetcode.cn id=1458 lang=typescript
 *
 * [1458] 两个子序列的最大点积
 */

// @lc code=start
//参考--01dp选和不选
//dp[i][j]代表nums[i]-nums2[j]可以累积的最大值
function maxDotProduct(nums1: number[], nums2: number[]): number {
  const Len1 = nums1.length
  const Len2 = nums2.length
  const dp = Array.from({ length: Len1 + 1 }, () => Array.from({ length: Len2 + 1 }, () => -Infinity))


  for (let i = 1; i <= Len1; i++) {
    for (let j = 1; j <= Len2; j++) {
      dp[i][j] = nums1[i - 1] * nums2[j - 1]
      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + nums1[i - 1] * nums2[j - 1])
      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j], dp[i][j - 1])
      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1])
    }
  }

  return dp[Len1][Len2]
};
// @lc code=end
//21
maxDotProduct([3, -2], [2, -6, 7])
//-1
maxDotProduct([-1, -1], [1, 1])
//18
maxDotProduct([2, 1, -2, 5], [3, 0, -6])