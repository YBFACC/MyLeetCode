/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * 自己--排序+双指针
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) return []
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  let index1 = 0
  let index2 = 0
  let res = []
  while (index1 < nums1.length && index2 < nums2.length) {
    if (nums1[index1] === nums2[index2]) {
      res.push(nums1[index1])
      index1++
      index2++
    } else if (nums1[index1] > nums2[index2]) {
      index2++
    } else {
      index1++
    }
  }
  return res
}
// @lc code=end
console.log(intersect([1, 2, 2, 1], []))

