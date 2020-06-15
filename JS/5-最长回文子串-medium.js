/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start

// /**
//  * 参考--二维dp--注意打表顺序
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function (s) {
//   let len = s.length
//   if (len < 2) {
//     return s
//   }
//   let maxLen = 1
//   let begin = 0
//   let dp = Array.from({ length: s.length }, () => new Array(s.length))
//   let charArray = s.split('')
//   for (let i = 0; i < len; i++) {
//     dp[i][i] = true
//   }

//   for (let j = 1; j < len; j++) {
//     for (let i = 0; i < j; i++) {
//       if (charArray[i] != charArray[j]) {
//         dp[i][j] = false
//       } else {
//         if (j - i < 3) {
//           dp[i][j] = true
//         } else {
//           dp[i][j] = dp[i + 1][j - 1]
//         }
//       }

//       // 只要 dp[i][j] == true 成立，就表示子串 s[i..j] 是回文，此时记录回文长度和起始位置
//       if (dp[i][j] && j - i + 1 > maxLen) {
//         maxLen = j - i + 1
//         begin = i
//       }
//     }
//   }

//   return s.slice(begin, begin + maxLen)
// }

// @lc code=end

/**
 * 参考--中心拓展法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  function centerSpread(left, right) {
    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        left--
        right++
      } else {
        break
      }
    }
    return s.slice(left + 1, right)
  }

  if (s.length < 2) return s
  let maxLen = 1
  let res = s[0]
  for (let i = 0; i < s.length - 1; i++) {
    let oddStr = centerSpread(i, i)
    let evenStr = centerSpread(i, i + 1)
    let maxLenStr = oddStr.length > evenStr.length ? oddStr : evenStr

    if (maxLenStr.length > maxLen) {
      res = maxLenStr
      maxLen = maxLenStr.length
    }
  }
  return res
}
longestPalindrome('babad')
