/*
 * @lc app=leetcode.cn id=424 lang=typescript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
//参考--1004题升级版
//需要统计窗口中出现最多的字母--决定是否扩大窗口
function characterReplacement(s: string, k: number): number {
  const Len = s.length
  const count = Array.from({ length: 26 }, () => 0)
  let res = 0
  let Max_cnt = 0
  let left = 0, right = 0
  while (right < Len) {
    count[char(s[right])]++
    Max_cnt = Math.max(Max_cnt, count[char(s[right])])
    if (k + Max_cnt < right - left + 1) {
      count[char(s[left])]--
      left++
    }
    res = Math.max(res, right - left + 1)
    right++
  }
  return res
};
function char(str: string): number {
  return str.charCodeAt(0) - 65
}
// @lc code=end
console.log(characterReplacement("AABABBA", 1))

console.log(characterReplacement("ABAB", 2))
