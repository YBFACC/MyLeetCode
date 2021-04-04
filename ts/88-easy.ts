/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

//自己--考虑完情况

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (n === 0) return
  if (m === 0) {
    for (let i = 0; i < nums1.length; i++) {
      nums1[i] = nums2[i]
    }
  }
  m--
  n--
  let all = m + n + 1
  while (all >= 0) {
    if (m >= 0 && n >= 0) {
      if (nums1[m] > nums2[n]) {
        nums1[all] = nums1[m]
        m--
      } else {
        nums1[all] = nums2[n]
        n--
      }
    } else if (n < 0) {
      nums1[all] = nums1[m]
      m--
    } else {
      nums1[all] = nums2[n]
      n--
    }
    all--
  }
  return
};
// @lc code=end

merge([1], 1, [], 0)

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)