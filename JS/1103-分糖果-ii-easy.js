/*
 * @lc app=leetcode.cn id=1103 lang=javascript
 *
 * [1103] 分糖果 II
 */

// @lc code=start
/**
 * 自己--可以用高中数学解--性能一般
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  let list = Array.from({ length: num_people }, _ => 0)
  let num = 1
  let index = 0
  while (candies) {
    if (num < candies) {
      list[index] += num
      candies -= num
    } else {
      list[index] += candies
      candies = 0
    }
    if (index === list.length - 1) {
      index = 0
    } else {
      index++
    }
    num++
  }
  return list
}
// @lc code=end
distributeCandies(7, 4)
