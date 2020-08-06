/*
 * @lc app=leetcode.cn id=336 lang=javascript
 *
 * [336] 回文对
 */

// @lc code=start
/**
 * 参考--map预存储逆序数组
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  const res = []
  const map = new Map()
  for (let i = 0; i < words.length; i++) {
    map.set(words[i].split('').reverse().join(''), i)
  }
  for (let i = 0; i < words.length; i++) {
    const str = words[i]
    if (help(str) && map.has('') && str !== '') {
      res.push([map.get(''), i])
    }
    for (let j = 0; j < str.length; j++) {
      const left = str.slice(0, j)
      const right = str.slice(j)
      if (help(left) && map.has(right) && map.get(right) !== i) {
        res.push([map.get(right), i])
      }
      if (help(right) && map.has(left) && map.get(left) !== i) {
        res.push([i, map.get(left)])
      }
    }
  }
  return res
}
function help(str) {
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

palindromePairs(['a', 'abc', 'aba', ''])
