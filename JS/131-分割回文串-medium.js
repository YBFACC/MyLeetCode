/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start

/**
 * 参考--回溯-子字符串是否是回文
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = []
  const backTrack = (strs, temp) => {
    if (strs.length === 0) {
      res.push(temp.slice())
    }

    for (let i = 1; i <= strs.length; i++) {
      const str = strs.slice(0, i)
      if (Palindrome(str)) {
        temp.push(str)
        backTrack(strs.slice(i), temp)
        temp.pop()
      }
    }
  }
  backTrack(s, [])
  return res
}

function Palindrome(str) {
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

partition('aab')
//'seeslaveidemonstrateyetartsnomedievalsees'
