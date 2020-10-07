/*
 * @lc app=leetcode.cn id=1043 lang=typescript
 *
 * [1043] 分隔数组以得到最大和
 */

// @lc code=start
//参考--dp
//读清题目
function maxSumAfterPartitioning(arr: number[], k: number): number {
  const Len = arr.length
  const dp = Array.from({ length: Len + 1 }, () => 0)
  for (let i = 1; i <= Len; i++) {
    let floor = -1
    for (let j = i - 1; j >= Math.max(i - k, 0); j--) {
      floor = Math.max(floor, arr[j])
      dp[i] = Math.max(dp[i], dp[j] + floor * (i - j))
    }
  }
  return dp[Len]
};  
// @lc code=end

maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3)
