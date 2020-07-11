/*
 * @lc app=leetcode.cn id=315 lang=javascript
 *
 * [315] 计算右侧小于当前元素的个数
 */

// @lc code=start
/**
 * 自己--暴力法--超时
 * @param {number[]} nums
 * @return {number[]}
 */
// var countSmaller = function (nums) {
//   let list = Array.from({ length: nums.length }, () => 0)
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] > nums[j]) {
//         list[i]++
//       }
//     }
//   }
//   return list
// }

/**
 * 参考--手动二分查找排序
 * @param {number[]} nums
 * @return {number[]}
 */
const countSmaller = nums => {
  if (!nums.length) return []
  const list = []
  const res = []
  for (let i = nums.length - 1; i >= 0; i--) {
    const index = findIndex(list, nums[i])
    list.splice(index, 0, nums[i])
    res.unshift(index)
  }
  return res
}

const findIndex = (arr, target) => {
  let l = 0
  let r = arr.length - 1
  while (l < r) {
    let mid = (l + r) >>> 1
    if (arr[mid] < target) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  if (arr[l] < target) return l + 1
  return l
}

// @lc code=end

countSmaller([5, 2, 6, 1])
