/*
 * @lc app=leetcode.cn id=956 lang=typescript
 *
 * [956] 最高的广告牌
 */

// @lc code=start
//参考--类背包问题--+x，-x，不选
function tallestBillboard(rods: number[]): number {
  const Len = rods.length
  if (Len < 2) return 0
  let sum = 0
  for (const rod of rods) sum += rod

  //第i个--2个子集的差的绝对值=总和
  const dp = Array.from({ length: Len }, () =>
    Array.from({ length: sum + 1 }, () => 0))
  //dp[0][0] = 0
  dp[0][rods[0]] = rods[0]

  let preSum = rods[0]//前缀和

  for (let i = 1; i < Len; i++) {
    for (let j = 0; j <= preSum; j++) {

      if (dp[i - 1][j] < j) continue

      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j])

      let k = j + rods[i]
      dp[i][k] = Math.max(dp[i][k], dp[i - 1][j] + rods[i])

      k = Math.abs(j - rods[i])
      dp[i][k] = Math.max(dp[i][k], dp[i - 1][j] + rods[i])
    }
    preSum += rods[i]
  }

  return dp[Len - 1][0] / 2
};


// @lc code=end

console.log(tallestBillboard([1, 2, 3, 6]))