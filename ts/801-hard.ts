/**
 * 参考－－ｄｐ
 * @param nums1 
 * @param nums2 
 * @returns 
 */
function minSwap(nums1: number[], nums2: number[]): number {
  const Len = nums1.length
  const dp_swap = Array.from({ length: Len }, () => Infinity)
  const dp_keep = Array.from({ length: Len }, () => Infinity)

  dp_swap[0] = 1
  dp_keep[0] = 0

  for (let i = 1; i < Len; i++) {
    if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
      if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
        dp_keep[i] = Math.min(dp_keep[i - 1], dp_swap[i - 1])
        dp_swap[i] = Math.min(dp_swap[i - 1], dp_keep[i - 1]) + 1
      } else {
        dp_keep[i] = dp_keep[i - 1]
        dp_swap[i] = dp_swap[i - 1] + 1
      }
    } else {
      dp_keep[i] = dp_swap[i - 1]
      dp_swap[i] = dp_keep[i - 1] + 1
    }
  }


  return Math.min(dp_swap[Len - 1], dp_keep[Len - 1])
};