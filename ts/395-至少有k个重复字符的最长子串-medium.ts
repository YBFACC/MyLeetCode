/*
 * @lc app=leetcode.cn id=395 lang=typescript
 *
 * [395] 至少有K个重复字符的最长子串
 */

// @lc code=start
//参考--贪心--按不满足的字符来进行分割
function longestSubstring(s: string, k: number): number {
  const map = new Map()
  for (const char of s) {
    map.set(char, map.has(char) ? map.get(char) + 1 : 1)
  }
  const set = new Set()
  for (const [key, value] of map) {
    if (value < k) {
      set.add(key)
    }
  }
  if (set.size === 0) return s.length
  if (set.size === map.size) return 0

  let last = 0
  let temp = []
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      temp.push(s.slice(last, i))
      last = i + 1
    }
  }
  temp.push(s.slice(last, s.length))
  let res = 0
  for (let i = 0; i < temp.length; i++) {
    res = Math.max(res, longestSubstring(temp[i], k))
  }
  return res
}
// @lc code=end

console.log(longestSubstring('bbaaacbd', 3))
