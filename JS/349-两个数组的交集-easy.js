/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * 自己--easy
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  return [...new Set(nums1.filter(v => nums2.includes(v)))]
}
// @lc code=end

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
