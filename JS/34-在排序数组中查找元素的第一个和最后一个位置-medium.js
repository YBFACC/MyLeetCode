/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * 自己--二分法找target的min和max下标--性能一般
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const mid = (left, right) => Math.trunc((left + right) / 2)
var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1]
  let min
  let max
  const _searchRange = function (left, right) {
    if (left > right) return

    let middle = mid(left, right)
    if (nums[middle] === target) {
      max = max === undefined ? middle : Math.max(middle, max)
      min = min === undefined ? middle : Math.min(middle, min)
    }
    _searchRange(left, middle - 1)
    _searchRange(middle + 1, right)
  }
  _searchRange(0, nums.length - 1)

  if (min === undefined) {
    return [-1, -1]
  }
  return [min, max]
}
// @lc code=end
console.log(searchRange([1], 1))
