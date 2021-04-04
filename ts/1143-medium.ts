/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 */

//自己--重做--dp2维
//我是从2个词尾开始比对，与官方从头不一样，但是答案一样


// @lc code=start
function longestCommonSubsequence(text1: string, text2: string): number {
  const dp = Array.from({ length: text1.length + 1 }, () => Array.from({ length: text2.length + 1 }, () => 0))
  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      if (text1[i] === text2[j]) {
        //解释：[i+1,...]和[j+1,...]比对过程中的最大值+1
        dp[i][j] = dp[i + 1][j + 1] + 1
      } else {
        //text1的上一个字母比对过程中的最大值
        //text1从右到左过程中对比最大值
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1])
      }
    }
  }
  return dp[0][0]
};
// @lc code=end
//1
longestCommonSubsequence("bsbininm", "jmjkbkjkv")
longestCommonSubsequence("abc", "abc")
longestCommonSubsequence("abcde", "ace")