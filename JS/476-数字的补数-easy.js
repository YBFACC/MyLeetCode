/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * 自己--位运算
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let temp = num.toString(2)
  let res = ''
  for (let i = 0; i < temp.length; i++) {
    res += temp[i] === '0' ? '1' : '0'
  }
  return parseInt(res, 2)
}
// @lc code=end

console.log(findComplement())
