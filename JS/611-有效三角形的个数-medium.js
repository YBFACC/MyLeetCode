/*
 * @lc app=leetcode.cn id=611 lang=javascript
 *
 * [611] 有效三角形的个数
 */

// @lc code=start
// /**
//  * 自己--O(n^3)
//  * @param {number[]} nums
//  * @return {number}
//  */
// var triangleNumber = function (nums) {
//   if (nums.length < 3) return 0
//   let res = 0
//   const dfs = function (index, list) {
//     if (list.length === 3) {
//       count(list)
//       return
//     }
//     for (let i = index; i < nums.length; i++) {
//       list.push(nums[i])
//       dfs(i + 1, list)
//       list.pop()
//     }
//   }
//   function count(list) {
//     for (let i = 0; i < list.length; i++) {
//       let temp = list[i]
//       let sum = 0
//       for (let j = 0; j < list.length; j++) {
//         if (j === i) continue
//         sum += list[j]
//       }
//       if (temp >= sum) {
//         return
//       }
//     }
//     res++
//   }
//   dfs(0, [])
//   return res
// }

/**
 * 参考--双指针--固定最大边
 * 2边之和大于第3边
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  nums.sort((a, b) => a - b)
  let res = 0
  for (let i = nums.length - 1; i >= 2; i--) {
    let l = 0
    let r = i - 1
    while (l < r) {
      if (nums[l] + nums[r] > nums[i]) {
        res += r - l
        r--
      } else {
        l++
      }
    }
  }
  return res
}

// @lc code=end

triangleNumber([24, 3, 82, 22, 35, 84, 19])
