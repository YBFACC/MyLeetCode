/*
 * @lc app=leetcode.cn id=87 lang=javascript
 *
 * [87] 扰乱字符串
 */

// @lc code=start
/**
 * 参考--DFS+memo
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  const memo = new Map()
  const dfs = function (s1, s2) {
    if (memo.has(s1 + '-' + s2)) return memo.get(s1 + '-' + s2)
    if (s1.length !== s2.length) return false
    if (s2 === s1) {
      memo.set(s1 + '-' + s2, true)
      return true
    }
    for (let i = 1; i < s1.length; i++) {
      if (
        dfs(s1.slice(0, i), s2.slice(0, i)) &&
        dfs(s1.slice(i), s2.slice(i))
      ) {
        memo.set(s1 + '-' + s2, true)
        return true
      }
      if (
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
  return dfs(s1, s2)
}

// @lc code=end

console.log(isScramble('great', 'rgtae'))
