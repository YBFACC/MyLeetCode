/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * 自己--二分查找
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  if (n < 2) return n
  let left = 1
  let right = n
  while (left <= right) {
    let mid = Math.floor((right + left) / 2)
    let res = guess(mid)
    if (res === -1) {
      right = mid - 1
    } else if (res === 1) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return -1
}
// @lc code=end

function guess(num) {
  if (num === 6) {
    return 0
  }
  return num > 6 ? -1 : 1
}

guessNumber(10)
