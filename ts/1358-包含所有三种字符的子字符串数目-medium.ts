/*
 * @lc app=leetcode.cn id=1358 lang=typescript
 *
 * [1358] 包含所有三种字符的子字符串数目
 */
//参考--res+=满足要求后的长度
// @lc code=start
function numberOfSubstrings(s: string): number {
  const Len = s.length
  if (Len === 1) return 1
  const count = Array.from({ length: 3 }, (v, k) => 0)
  let res = 0
  let left = 0
  let right = 0

  while (right < Len) {
    count[s[right].charCodeAt(0) - 97]++

    while (isAllZore(count)) {
      res += Len - right 
      count[s[left].charCodeAt(0) - 97]--
      left++
    }
    right++
  }

  return res
};
function isAllZore(list: number[]): boolean {
  return list.every(v => v >= 1)
}
// @lc code=end

numberOfSubstrings("acbbcac")