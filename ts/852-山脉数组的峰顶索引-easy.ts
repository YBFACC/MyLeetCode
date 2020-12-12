/*
 * @lc app=leetcode.cn id=852 lang=typescript
 *
 * [852] 山脉数组的峰顶索引
 */

//自己--获取最大值的下标-二分优化

// @lc code=start
function peakIndexInMountainArray(arr: number[]): number {
  let max = arr[0]
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
      res = i
    }
  }
  return res
};
// @lc code=end

