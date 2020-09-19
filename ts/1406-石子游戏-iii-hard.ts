/*
 * @lc app=leetcode.cn id=1406 lang=typescript
 *
 * [1406] 石子游戏 III
 */

// @lc code=start
//参考--dp-博弈类问题
//对比上一题-中心思想一致-每次拿到最大值
function stoneGameIII(stoneValue: number[]): string {
  const piles = stoneValue
  const Len = piles.length
  const dp = Array.from({ length: Len + 3 }, () => 0)
  let sum = 0
  for (let i = Len - 1; i >= 0; i--) {
    sum += piles[i]
    dp[i] = -Infinity
    for (let j = 1; j <= 3; j++) {
      dp[i] = Math.max(dp[i], sum - dp[i + j])
    }
  }
  if (sum === dp[0] + dp[0]) {
    return 'Tie'
  }
  if (sum - dp[0] > dp[0]) {
    return 'Bob'
  }
  return "Alice"
};
// @lc code=end

console.log(stoneGameIII([1,2,3,-9]))