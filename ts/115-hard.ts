/*
 * @lc app=leetcode.cn id=115 lang=typescript
 *
 * [115] 不同的子序列
 */

//深搜超时
//重做-自己--dp-双重循环
//类似排列组合，每次加上后一个字母的所有可能
//一步最优解🤪

// @lc code=start
function numDistinct(s: string, t: string): number {
  const dp = Array.from({ length: t.length + 1 }, () => 0)
  dp[t.length] = 1
  for (let i = s.length - 1; i >= 0; i--) {
    for (let k = 0; k < t.length; k++) {
      if (s[i] === t[k] && dp[k + 1] !== 0) {
        dp[k] += dp[k + 1]
      }
    }
  }
  return dp[0]
};

//参考--官方题解

function numDistinct2(s: string, t: string): number {
  const dp = Array.from({ length: s.length + 1 }, () => Array.from({ length: t.length + 1 }, () => 0))

  for (let i = 0; i <= s.length; i++) {
    dp[i][t.length] = 1
  }

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = t.length - 1; j >= 0; j--) {
      if (s[i] === t[j]) {
        dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j]
      } else {
        dp[i][j] = dp[i + 1][j]
      }
    }
  }
  return dp[0][0]
};

// @lc code=end
numDistinct2("rabbbit", "rabbit")

numDistinct("adbdadeecadeadeccaeaabdabdbcdabddddabcaaadbabaaedeeddeaeebcdeabcaaaeeaeeabcddcebddebeebedaecccbdcbcedbdaeaedcdebeecdaaedaacadbdccabddaddacdddc"
  , "bcddceeeebecbc"
)
