/*
 * @lc app=leetcode.cn id=214 lang=typescript
 *
 * [214] 最短回文串
 */

// @lc code=start
//自己--中心拓展法
function shortestPalindrome(s: string): string {
  let res = 0
  for (let i = 0; i < s.length; i++) {
    if (helper(i, i, s)) {
      res = Math.max(res, i * 2 + 1)
    }
    if (helper(i, i + 1, s)) {
      res = Math.max(res, (i + 1) * 2)
    }
  }
  let ans = s.slice(res).split('').reverse().join('') + s
  return ans
}

function helper(left: number, right: number, s: string): boolean {
  while (left >= 0 && right < s.length) {
    if (s[left] === s[right]) {
      left--
      right++
    } else {
      break
    }
  }
  if (left === -1) return true

  return false
}
// @lc code=end

shortestPalindrome('abcd')

