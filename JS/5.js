// /**
//  * 自己---暴力法---超时
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function(s) {
//   if (s === '') return ''
//   var res = ''
//   s = s.split('')
//   for (let i = 0; i < s.length; i++) {
//     for (let j = s.length; j > i; j--) {
//       let temp1 = s.slice(i, j).join('')
//       let temp2 = s
//         .slice(i, j)
//         .reverse()
//         .join('')
//       if (temp1 === temp2) {
//         temp1.length > res.length ? (res = temp1) : null
//       }
//     }
//   }
//   return res === '' ? s[0] : res
// }

/**
 * 参考---dp---居然也超时
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var len = s.length
  if (len < 2) return s
  var dp = Array.from({ length: len }, _ =>
    Array.from({ length: len }, _ => true)
  )
  var maxLen = 1
  var start = 0
  for (let j = 1; j < len; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] === s[j]) {
        if (j - i < 3) {
          dp[i][j] = true
        } else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      } else {
        dp[i][j] = false
      }

      if (dp[i][j]) {
        let curlen = j - i + 1
        if (curlen > maxLen) {
          maxLen = curlen
          start = i
        }
      }
    }
  }
  return s.slice(start, start + maxLen)
}


console.log(longestPalindrome('babad'))


// /**
//  * copy---dp没超时
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function(s) {
//   if (!s || s.length < 2) {
//     return s
//   }
//   var s_f = s
//     .split('')
//     .reverse()
//     .join('')
//   var resultStr = s[0]
//   var maxLen = 1
//   var tmpLen = 1
//   var maxStrIndex = 0
//   var len = s.length
//   //判断字符串是否回文
//   function isPalinerome(i, r) {
//     if (len - i - 1 == r - tmpLen + 1) {
//       return true
//     }
//     return false
//   }
//   //初始化二维数组
//   var len = s.length
//   var arr = new Array(len)
//   for (var i = 0; i < len; i++) {
//     arr[i] = []
//     for (var r = 0; r < len; r++) {
//       arr[i][r] = 0
//     }
//   }
//   for (var i = 0; i < len; i++) {
//     for (var r = 0; r < len; r++) {
//       if (s[i] == s_f[r]) {
//         if (i == 0 || r == 0) {
//           arr[i][r] = 1
//         } else {
//           arr[i][r] = arr[i - 1][r - 1] + 1
//           tmpLen = arr[i][r]
//         }
//         if (tmpLen > maxLen && isPalinerome(i, r)) {
//           maxStrIndex = r
//           maxLen = tmpLen
//           resultStr = s.substring(i - tmpLen + 1, i + 1)
//         }
//       }
//     }
//   }
//   return resultStr
// }
