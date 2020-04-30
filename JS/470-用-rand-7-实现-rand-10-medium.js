/*
 * @lc app=leetcode.cn id=470 lang=javascript
 *
 * [470] 用 Rand7() 实现 Rand10()
 */

// @lc code=start
/**
 * 概率问题--使每个数概率相等
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
  let sum = 0
  let get_num1 = rand7()
  let get_num2 = rand7()
  while (get_num1 === 7) {
    get_num1 = rand7()
  }
  while (get_num2 > 5) {
    get_num2 = rand7()
  }
  return get_num2 + (get_num1 / 4 >= 1 ? 0 : 5)
}
// @lc code=end
