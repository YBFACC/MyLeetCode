/*
 * @lc app=leetcode.cn id=1818 lang=typescript
 *
 * [1818] 绝对差值和
 */

//参考--找到nums2[i]与nums1[j]尽可能接近


// @lc code=start
function minAbsoluteSumDiff(nums1: number[], nums2: number[]): number {
  const Len = nums1.length
  const sorted = nums1.slice()
  sorted.sort((a, b) => a - b)
  let sum = 0, max = 0
  for (let i = 0; i < Len; i++) {
    const a = nums1[i], b = nums2[i]
    if (a === b) continue
    const x = Math.abs(a - b)
    sum += x
    let left = 0, right = Len - 1
    while (left < right) {
      const mid = left + right + 1 >> 1
      if (sorted[mid] <= b) left = mid
      else right = mid - 1
    }
    let nb = Math.abs(sorted[right] - b)
    if (right + 1 < Len) nb = Math.min(nb, Math.abs(sorted[right + 1] - b))
    if (nb < x) max = Math.max(max, x - nb)
  }
  return (sum - max) % 1000000007
};
// @lc code=end

minAbsoluteSumDiff([1, 10, 4, 4, 2, 7], [9, 3, 5, 1, 7, 4])