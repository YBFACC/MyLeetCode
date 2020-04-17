/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * 参考--用能量走路--性能好
 * 想象你是那个在格子上行走的小人，格子里面的数字代表“能量”，你需要“能量”才能继续行走。
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let power = nums[0]
  let index = 0
  while (power > 0 && index < nums.length - 1) {
    index++
    power--
    if (nums[index] > power) {
      power = nums[index]
    }
  }

  return index === nums.length - 1
}
// @lc code=end

canJump([2, 3, 1, 1, 4])

// /**
//  * 自己--超时
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canJump = function (nums) {
//   if (nums.length < 2) return true
//   let list = [[nums[0], 0]]
//   let set = new Set()
//   set.add(0)
//   while (list.length > 0) {
//     let size = list.length
//     while (size > 0) {
//       let curr = list.shift()
//       while (curr[0] > 0) {
//         let step = curr[0] + curr[1]
//         if (step === nums.length - 1) return true
//         if (!set.has(step)) {
//           list.push([nums[step], step])
//         }
//         curr[0]--
//       }
//       size--
//     }
//   }
//   return false
// }
