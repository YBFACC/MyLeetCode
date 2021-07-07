/*
 * @lc app=leetcode.cn id=87 lang=typescript
 *
 * [87] 扰乱字符串
 */

//参考--DFS+去重
//为什么s2也要一起被处理
//分完的每层字母数一定，可以来去重

// @lc code=start
function isScramble(s1: string, s2: string): boolean {
  const memo = new Map()
  const dfs = function (s1: string[], s2: string[]): boolean {
    if (memo.has(s1 + '-' + s2)) return memo.get(s1 + '-' + s2)
    if (s1.length === 0) return true
    if (s1.length === 1) {
      memo.set(s1 + '-' + s2, s1[0] === s2[0])
      return s1[0] === s2[0]
    }

    const _s1 = s1.slice(), _s2 = s2.slice()
    _s1.sort(), _s2.sort()
    if (_s1.join() !== _s2.join()) return false

    for (let i = 1; i < s1.length; i++) {
      if (
        dfs(s1.slice(0, i), s2.slice(0, i)) &&
        dfs(s1.slice(i), s2.slice(i))
      ) {
        memo.set(s1 + '-' + s2, true)
        return true
      } else if (
        dfs(s1.slice(i), s2.slice(0, s2.length - i)) &&
        dfs(s1.slice(0, i), s2.slice(s2.length - i))
      ) {
        memo.set(s1 + '-' + s2, true)
        return true
      }
    }
    memo.set(s1 + '-' + s2, false)
    return false
  }

  return dfs(s1.split(''), s2.split(''))
};
// @lc code=end

