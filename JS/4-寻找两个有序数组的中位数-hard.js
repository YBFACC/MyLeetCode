/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * 参考--分段--二分法
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = (nums1, nums2) => {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)

  let low = 0
  let high = nums1.length
  while (low <= high) {
    let mid1 = low + ((high - low) >> 1)
    let mid2 = ((nums1.length + nums2.length + 1) >> 1) - mid1

    let L1 = mid1 <= 0 ? -Infinity : nums1[mid1 - 1]
    let R1 = nums1.length <= mid1 ? Infinity : nums1[mid1]
    let L2 = mid2 <= 0 ? -Infinity : nums2[mid2 - 1]
    let R2 = nums2.length <= mid2 ? Infinity : nums2[mid2]

    if (L1 > R2) {
      high = mid1 - 1
    } else if (L2 > R1) {
      low = mid1 + 1
    } else {
      return (nums1.length + nums2.length) % 2 === 0
        ? (Math.max(L1, L2) + Math.min(R1, R2)) / 2
        : Math.max(L1, L2)
    }
  }
}

// @lc code=end

console.log(
  findMedianSortedArrays([28, 29, 33, 36, 40], [1, 3, 5, 7, 9, 13, 14, 18])
)
