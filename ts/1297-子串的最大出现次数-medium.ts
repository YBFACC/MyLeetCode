/*
 * @lc app=leetcode.cn id=1297 lang=typescript
 *
 * [1297] 子串的最大出现次数
 */

// @lc code=start
//参考--枚举--仅考虑minSize
function maxFreq(s: string, maxLetters: number, minSize: number, maxSize: number): number {

  const map = new Map()
  const Len = s.length
  for (let i = 0; i < Len; i++) {
    if (Len - i < minSize) break
    const temp = s.slice(i, i + minSize)
    if (new Set(temp).size <= maxLetters) {
      map.set(temp, map.has(temp) ? map.get(temp) + 1 : 1)
    }
  }
  let res = 0
  map.forEach((v, k) => {
    res = Math.max(res, v)
  })
  return res
};
// @lc code=end

maxFreq("abcde", 2, 3, 3)

maxFreq("aababcaab", 2, 3, 4)
