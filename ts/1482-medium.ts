/*
 * @lc app=leetcode.cn id=1482 lang=typescript
 *
 * [1482] 制作 m 束花所需的最少天数
 */

//提示--根据日期二分
//不看提示难想到

// @lc code=start
function minDays(bloomDay: number[], m: number, k: number): number {
  const Len = bloomDay.length
  if (Len < m * k) return -1
  let min = 10 ** 9, max = 0
  for (const day of bloomDay) {
    max = Math.max(max, day)
    min = Math.min(min, day)
  }
  while (min < max) {
    const mid = min + Math.trunc((max - min) / 2)
    const res = helper(bloomDay, m, k, mid)
    if (res) {
      max = mid
    } else {
      min = mid + 1
    }
  }
  return min
};

function helper(bloomDay: number[], m: number, k: number, mid: number): boolean {
  let count = 0
  for (const day of bloomDay) {
    if (day <= mid) {
      count++
    } else {
      count = 0
    }
    if (count === k) {
      m--
      count = 0
    }
    if (m === 0) return true
  }
  return false
}
// @lc code=end
minDays([1000000000, 1000000000], 1, 1)

minDays([1, 10, 3, 10, 2], 3, 1)
