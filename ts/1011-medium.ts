/*
 * @lc app=leetcode.cn id=1011 lang=typescript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

//自己--二分
//每天运载最大量的二分

// @lc code=start
function shipWithinDays(weights: number[], days: number): number {
  let left = 0, right = 0
  weights.forEach((v) => right += v)
  while (left < right) {
    const mid = left + Math.trunc((right - left) / 2)
    if (helper(weights, days, mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
};
function helper(weights: number[], days: number, target: number): boolean {
  let count = 0, day = 0
  for (const weight of weights) {
    if (weight > target || day >= days) return false
    if (count + weight > target) {
      count = weight
      day++
      continue
    }
    count += weight
  }
  return day < days
}
// @lc code=end
shipWithinDays([3, 2, 2, 4, 1, 4], 3)
shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)