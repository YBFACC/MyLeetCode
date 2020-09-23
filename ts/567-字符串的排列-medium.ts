/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

//参考--滑动窗口--只需要字母个数，s1的排序

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
  const Len1 = s1.length
  const Len2 = s2.length
  if (Len1 > Len2) return false
  const count = Array.from({ length: 26 }, (v, k) => 0)
  for (let i = 0; i < Len1; i++) {
    count[s1[i].charCodeAt(0) - 97]++
    count[s2[i].charCodeAt(0) - 97]--
  }
  if (isAllZore(count)) return true
  for (let i = Len1; i < Len2; i++) {
    count[s2[i].charCodeAt(0) - 97]--
    count[s2[i - Len1].charCodeAt(0) - 97]++
    if (isAllZore(count)) return true
  }

  return false
};
function isAllZore(list: number[]): boolean {
  return list.every(v => v === 0)
}
// @lc code=end

console.log(checkInclusion("ab", "abdooo"))