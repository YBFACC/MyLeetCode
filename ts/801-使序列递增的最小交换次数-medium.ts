/*
 * @lc app=leetcode.cn id=801 lang=typescript
 *
 * [801] 使序列递增的最小交换次数
 */

// @lc code=start
//参考--dp-需要分析所有情况
function minSwap(A: number[], B: number[]): number {
  const Len = A.length
  const dp_swap = Array.from({ length: Len }, () => Infinity)
  const dp_keep = Array.from({ length: Len }, () => Infinity)

  dp_swap[0] = 1
  dp_keep[0] = 0

  for (let i = 1; i < Len; i++) {

    if (A[i - 1] < A[i] && B[i - 1] < B[i]) {
      if (A[i - 1] < B[i] && B[i - 1] < A[i]) {
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
// @lc code=end
//1
console.log(minSwap([3, 3, 8, 9, 10], [1, 7, 4, 6, 8]))

//4
console.log(minSwap([0, 7, 8, 10, 10, 11, 12, 13, 19, 18], [4, 4, 5, 7, 11, 14, 15, 16, 17, 20]))
//1
console.log(minSwap([0, 3, 5, 8, 9], [2, 1, 4, 6, 9]))
//0
console.log(minSwap([2, 4, 5, 7, 10], [1, 3, 4, 5, 9]))
//1
console.log(minSwap([1, 3, 5, 4], [1, 2, 3, 7]))
