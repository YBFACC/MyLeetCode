/*
 * @lc app=leetcode.cn id=354 lang=typescript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
//与17-08的解题思路一致
//先按width排序-将一个纬度变成有序-转化为LIS问题
//贪心--二分维护一个递增序列
function maxEnvelopes(envelopes: number[][]): number {
  if (envelopes.length === 0) return 0
  envelopes.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]))
  let res = 0
  let list: number[] = []
  for (const item of envelopes) {
    let left = 0
    let right = res
    let curr_h = item[1]
    while (left < right) {
      const mid = left + ((right - left) >> 1)
      if (list[mid] < curr_h) {
        left = mid + 1
      } else {
        right = mid
      }
    }
    list[left] = curr_h
    if (left === res) res++
  }

  return res
}
// @lc code=end

maxEnvelopes([
  [5, 4],
  [6, 4],
  [6, 7],
  [2, 3]
])
