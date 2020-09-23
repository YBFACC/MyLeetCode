/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */
//自己--类似567--滑动窗口-统计字母出现的次数
// @lc code=start
function findAnagrams(s: string, p: string): number[] {
  const Len1 = p.length
  const Len2 = s.length
  const res: number[] = []
  if (Len1 > Len2) return res
  const count = Array.from({ length: 26 }, (v, k) => 0)
  for (let i = 0; i < Len1; i++) {
    count[p[i].charCodeAt(0) - 97]++
    count[s[i].charCodeAt(0) - 97]--
  }
  if (isAllZore(count)) {
    res.push(0)
  }
  for (let i = Len1; i < Len2; i++) {
    count[s[i].charCodeAt(0) - 97]--
    count[s[i - Len1].charCodeAt(0) - 97]++
    if (isAllZore(count)) {
      res.push(i - Len1 + 1)
    }
  }
  return res
};
function isAllZore(list: number[]): boolean {
  return list.every(v => v === 0)
}
// @lc code=end

findAnagrams("abab", "ab")