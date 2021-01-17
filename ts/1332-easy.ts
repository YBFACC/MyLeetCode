/*
 * @lc app=leetcode.cn id=1332 lang=typescript
 *
 * [1332] 删除回文子序列
 */

//提示--脑筋急转弯--最多消除2次
//子序列--同类字母序列就是回文
//本身是回文，只需要删除1次

// @lc code=start
function removePalindromeSub(s: string): number {
  if (s.length === 0) return 0
  if (helper(s)) return 1
  return 2
};
function helper(s: string): boolean {
  let left = 0
  let right = s.length - 1
  while (left <= right) {
    if (s[left] !== s[right]) return false
    left++
    right--
  }
  return true
}
// @lc code=end

