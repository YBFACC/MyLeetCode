/*
 * @lc app=leetcode.cn id=1048 lang=typescript
 *
 * [1048] 最长字符串链
 */

// @lc code=start
//参考----二维dp
function longestStrChain(words: string[]): number {
  words.sort((a, b) => a.length - b.length)
  let res = 1
  const Len = words.length
  const dp = Array.from({ length: Len }, () => 1)

  for (let i = 0; i < Len; i++) {
    for (let j = 0; j < i; j++) {
      if (helper(i, j)) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
        res = Math.max(res, dp[i])
      }
    }
  }
  function helper(i: number, j: number): boolean {
    if (words[i].length !== words[j].length + 1) return false;

    let a = 0;
    let b = 0;
    while (a < words[i].length) {
      if (words[i][a] === words[j][b]) {
        a++;
        b++;
      } else {
        a++;
      }
    }

    return b === words[j].length;
  }
  return res
};
// @lc code=end

longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"])