/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * 自己--二维数组--按行合并--性能差
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (s === '') return ''
  if (numRows === 1) return s
  let index = 0
  let pointer = -1
  let rise = false
  let arr = Array.from({ length: numRows }, _ => [])
  while (index < s.length) {
    if (pointer >= numRows - 1) {
      rise = true
    } else if (pointer <= 0 && index !== 0) {
      rise = false
    }
    rise ? pointer-- : pointer++
    arr[pointer].push(s[index])
    index++
  }
  let res = ''
  arr.forEach(item => {
    res += item.join('')
  })
  return res
}
convert('LEETCODEISHIRING', 3)
// @lc code=end
