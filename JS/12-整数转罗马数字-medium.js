/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * 自己--if判断多的🤮了--性能差
 * @param {number} num
 * @return {string}
 */
// var intToRoman = function(num) {
//   let number = Number(num)
//   let res = ''
//   while (number > 0) {
//     if (number >= 1000) {
//       number -= 1000
//       res += 'M'
//     } else if (number >= 500) {
//       if (number >= 900) {
//         number -= 900
//         res += 'CM'
//       } else {
//         number -= 500
//         res += 'D'
//       }
//     } else if (number >= 100) {
//       if (number >= 400) {
//         number -= 400
//         res += 'CD'
//       } else {
//         number -= 100
//         res += 'C'
//       }
//     } else if (number >= 50) {
//       if (number >= 90) {
//         number -= 90
//         res += 'XC'
//       } else {
//         number -= 50
//         res += 'L'
//       }
//     } else if (number >= 10) {
//       if (number >= 40) {
//         number -= 40
//         res += 'XL'
//       } else {
//         number -= 10
//         res += 'X'
//       }
//     } else if (number >= 5) {
//       if (number >= 9) {
//         number -= 9
//         res += 'IX'
//       } else {
//         number -= 5
//         res += 'V'
//       }
//     } else if (number >= 1) {
//       if (number >= 4) {
//         number -= 4
//         res += 'IV'
//       } else {
//         number -= 1
//         res += 'I'
//       }
//     }
//   }
//   return res
// }


/**
 * 参考--贪心--性能好
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  let res=""
  let index=0
  while (index<13) {
    while (num>nums[index]) {
      res+=romans[index]
      num-=nums[index]
    }
    index++
  }
  return res
}
// @lc code=end
