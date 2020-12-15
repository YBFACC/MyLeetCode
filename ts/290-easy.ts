/*
 * @lc app=leetcode.cn id=290 lang=typescript
 *
 * [290] 单词规律
 */

//自己--字典

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
  const list = s.split(' ')
  if (pattern.length !== list.length) return false
  const map = new Map()
  const set = new Set()
  for (let i = 0; i < pattern.length; i++) {
    const k = pattern[i]
    if (map.has(k)) {
      if (list[i] !== map.get(k)) return false
    } else {
      if (set.has(list[i])) return false
      map.set(k, list[i])
      set.add(list[i])
    }
  }
  return true
};
// @lc code=end

console.log(wordPattern("abba"
  , "dog dog dog dog"))