/*
 * @lc app=leetcode.cn id=132 lang=typescript
 *
 * [132] 分割回文串 II
 */

//提示--dp

// @lc code=start
function minCut(s: string): number {
  const Len = s.length
  const list = Array.from({ length: Len }, () => Len)
  list[0] = 0
  for (let i = 1; i < Len; i++) {
    if (Palindrome(s.slice(0, i + 1))) {
      list[i] = 0
      continue
    }
    for (let j = 0; j < i; j++) {
      if (!Palindrome(s.slice(j + 1, i + 1))) continue
      list[i] = Math.min(list[i], list[j] + 1)
    }
  }
  return list[Len - 1]
}
function Palindrome(str: string): boolean {
  let left = 0
  let right = str.length - 1
  while (left < right) {
    if (str[left] !== str[right]) return false
    left++
    right--
  }
  return true
}
// @lc code=end

minCut('ababababababababababababcbabababababababababababa')
