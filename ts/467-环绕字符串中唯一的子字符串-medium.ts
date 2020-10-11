/*
 * @lc app=leetcode.cn id=467 lang=typescript
 *
 * [467] 环绕字符串中唯一的子字符串
 */

// @lc code=start
//参考--特殊的去重方式
//统计以某个字母结尾的最长连续子串
function findSubstringInWraproundString(p: string): number {
  const set = new Set()
  const Len = p.length
  p = ' ' + p
  const dp = new Int16Array(26)
  let cnt = 1
  for (let i = 1; i <= Len; i++) {
    if (check(p[i - 1], p[i])) {
      cnt++
    } else {
      cnt = 1
    }
    const k = p.charCodeAt(i) - 97
    dp[k] = Math.max(dp[k], cnt)
  }

  let res = 0
  for (let i = 0; i < 26; i++)res += dp[i]
  return res
};
function check(a: string, b: string): boolean {
  if (a == 'z' && b == 'a') return true;
  return b.charCodeAt(0) - a.charCodeAt(0) == 1;
}
// @lc code=end



console.log(findSubstringInWraproundString("a"))

console.log(findSubstringInWraproundString("cac"))

console.log(findSubstringInWraproundString("zab"))