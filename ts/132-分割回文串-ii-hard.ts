/*
 * @lc app=leetcode.cn id=132 lang=typescript
 *
 * [132] 分割回文串 II
 */

//自己超时

// @lc code=start
function minCut(s: string): number {
  let res = s.length
  const visited = new Map()
  const backTrack = (strs: string, temp: string[], index: number) => {
    if (strs.length === 0) {
      res = Math.min(res, temp.length - 1)
    }

    for (let i = 1; i <= strs.length; i++) {
      const str = strs.slice(0, i)
      let visit = `${index},${i}`
      if (visited.has(visit)) {
        if (visited.get(visit)) {
          temp.push(str)
          backTrack(strs.slice(i), temp, index + i)
          temp.pop()
        }
      } else {
        if (Palindrome(str)) {
          temp.push(str)
          visited.set(visit, true)
          backTrack(strs.slice(i), temp, index + i)
          temp.pop()
        } else {
          visited.set(visit, false)
        }
      }
    }
  }
  backTrack(s, [], 0)
  return res
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
