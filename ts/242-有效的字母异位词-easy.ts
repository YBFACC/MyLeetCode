/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

//自己--easy

// @lc code=start
function isAnagram(s: string, t: string): boolean {

  const list = Array.from({ length: 26 }, () => 0)
  for (let i = 0; i < s.length; i++) {
    list[char(s[i])]++
  }
  for (let i = 0; i < t.length; i++) {
    list[char(t[i])]--
  }
  for (let i = 0; i < 26; i++) {
    if (list[i] !== 0) return false
  }
  return true
};

function char(str: string): number {
  return str.charCodeAt(0) - 97
}
// @lc code=end

isAnagram("anagram", "nagaram")