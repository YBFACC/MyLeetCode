/*
 * @lc app=leetcode.cn id=539 lang=javascript
 *
 * [539] 最小时间差
 */

// @lc code=start
/**
 * 自己---性能差
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  const sum = function(str) {
    let temp = str.match(/\d+/g)
    return temp[0] * 60 + Number(temp[1])
  }
  let arr = []
  for (let i = 0; i < timePoints.length; i++) {
    arr.push(sum(timePoints[i]))
  }
  arr.sort((a, b) => a - b)
  let min = Number.MAX_VALUE
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = arr[i + 1] - arr[i]
    min = Math.min(min, temp)
  }

  min = Math.min(min, 1440 - arr[arr.length - 1] + arr[0])
  return min
}
/**
 * 自己---优化了下--少创建了个数组
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  const sum = function(str) {
    let temp = str.match(/\d+/g)
    return temp[0] * 60 + Number(temp[1])
  }
  let len = timePoints.length
  for (let i = 0; i < len; i++) {
    timePoints[i] = sum(timePoints[i])
  }
  timePoints.sort((a, b) => a - b)
  let min = Number.MAX_VALUE
  for (let i = 0; i < len - 1; i++) {
    let temp = timePoints[i + 1] - timePoints[i]
    min = Math.min(min, temp)
  }
  min = Math.min(min, 1440 - timePoints[len - 1] + timePoints[0])
  return min
}
findMinDifference(['23:59', '00:00'])
// @lc code=end
