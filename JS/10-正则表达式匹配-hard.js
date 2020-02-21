/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * 自己---遇到*使用递归--性能差
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function(s, p) {
  let res = []
  let length = s.length
  const dfs = function(s, p, temp) {
    let indexS = 0
    let lenS = s.length
    let indexP = 0
    let lenP = p.length
    while (indexP < lenP && indexS < lenS) {
      if (p[indexP + 1] === '*') {
        while (s[indexS] === p[indexP] || p[indexP] === '.') {
          if (indexS < lenS) {
            dfs(s.slice(indexS), p.slice(indexP + 2), temp)
            temp += s[indexS]
          } else {
            break
          }
          indexS++
        }
        indexP += 2
      } else {
        if (p[indexP] === s[indexS] || p[indexP] === '.') {
          temp += s[indexS]
          indexS++
        } else {
          break
        }
        indexP++
      }
    }
    if (temp.length === length) {
      while (indexP < lenP) {
        //处理“a”，“ab*”情况
        if (p[indexP + 1] === '*') {
          indexP += 2
        } else {
          break
        }
      }
      if (indexP === lenP) {
        res.push(temp)
        return
      }
    }
  }
  dfs(s, p, '')
  return res.includes(s)
}
// @lc code=end
