/*
 * @lc app=leetcode.cn id=650 lang=typescript
 *
 * [650] 只有两个键的键盘
 */
//24-12-6-3
// @lc code=start
//参考--dp-把一个数分解成n个质数
function minSteps(n: number): number {
  const Len = n + 1
  const dp = Array.from({ length: Len }, (v, i) => i)
  dp[0] = 0
  dp[1] = 0
  dp[2] = 2
  dp[3] = 3
  dp[4] = 4
  for (let i = 5; i < Len; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        const num = i / j
        dp[i] = num + dp[j]
      }
    }
  }

  return dp[n]
};
// @lc code=end

console.log(minSteps(24))