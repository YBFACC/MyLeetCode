/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * 参考--单调栈
 * 先找nums2的下个元素最大值
 * nums1进行映射
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  if(nums1.length===0) return []
  let stack = []
  let map = new Map()
  let res = []
  for (const n2 of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < n2) {
      map.set(stack[stack.length - 1], n2)
      stack.pop()
    }
    stack.push(n2)
  }
  while (stack.length > 0) {
    map.has(stack[stack.length - 1])
      ? null
      : map.set(stack[stack.length - 1], -1)
    stack.pop()
  }
  for (const n1 of nums1) {
    if (map.has(n1)) {
      res.push(map.get(n1))
    } else {
      res.push(map.get(-1))
    }
  }
  return res
}
// @lc code=end

nextGreaterElement([4, 1, 2], [2, 3, 5, 1, 0, 7, 3])
