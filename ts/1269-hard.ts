/*
 * @lc app=leetcode.cn id=1269 lang=typescript
 *
 * [1269] 停在原地的方案数
 */

//提示--dp
//二维到一维
//[i][j]=[i-1][j-1]+[i-1][j]+[i-1][j+1]

// @lc code=start
function numWays(steps: number, arrLen: number): number {
  let dp = Array.from({ length: arrLen }, () => 0)
  dp[0] = 1
  for (let i = 0; i < steps; i++) {
    const temp = dp.slice()
    for (let j = 0; j <= i + 1 && j < arrLen; j++) {
      (j + 1 < arrLen) && (temp[j] += dp[j + 1]);
      (j > 0) && (temp[j] += dp[j - 1])
      temp[j] %= 1000000007
    }
    dp = temp
  }

  return dp[0]
};
// @lc code=end
numWays(3, 2)

numWays(27, 7)
numWays(4, 2)
