/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * 自己--能量走路法--可以优化
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// var canCompleteCircuit = function (gas, cost) {
//   if (gas.length < 2) {
//     if (gas[0] >= cost[0]) {
//       return 0
//     }
//     return -1
//   }
//   let sum = 0
//   let temp = []
//   let dfs = []
//   for (let i = 0; i < gas.length; i++) {
//     let item = gas[i] - cost[i]
//     sum += item
//     temp.push(item)
//     item > 0 ? dfs.push(i) : null
//   }
//   if (sum < 0) {
//     return -1
//   }
//   while (dfs.length > 0) {
//     let target = dfs.shift()
//     let _sum = temp[target]
//     for (let i = target + 1; i < temp.length; i++) {
//       _sum += temp[i]
//       if (_sum < 0) {
//         break
//       }
//     }
//     if (_sum < 0) {
//       continue
//     }
//     for (let i = 0; i < target; i++) {
//       _sum += temp[i]
//       if (_sum < 0) {
//         break
//       }
//     }
//     if (_sum < 0) {
//       continue
//     }
//     return target
//   }
//   return -1
// }

/**
 * 参考题解--优化版
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  if (gas.length < 2) {
    if (gas[0] >= cost[0]) {
      return 0
    }
    return -1
  }
  let sum = 0
  let pile = 0
  let res = 0
  for (let i = 0; i < gas.length; i++) {
    sum += gas[i] - cost[i]
    pile += gas[i] - cost[i]
    if (pile < 0) {
      res = i + 1
      pile = 0
    }
  }
  if (sum < 0) {
    return -1
  }

  return res
}
// @lc code=end

canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1])
