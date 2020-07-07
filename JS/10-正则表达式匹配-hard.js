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

var isMatch = function (s, p) {
  let res = []
  let length = s.length
  const dfs = function (s, p, temp) {
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

/**
 * 参考--dp解法
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  if (s == null || p == null) return false
  let len1 = s.length,
    len2 = p.length

  let dp = Array.from({ length: s.length + 1 }, () =>
    Array.from({ length: p.length + 1 }, () => false)
  )
  dp[0][0] = true

  for (let j = 1; j <= len2; j++) {
    if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2]
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j]
        } else {
          dp[i][j] = dp[i][j - 2]
        }
      }
    }
  }

  return dp[len1][len2]
}

console.log(isMatch('aa', 'a*'))
