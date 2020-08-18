/*
 * @lc app=leetcode.cn id=1094 lang=typescript
 *
 * [1094] 拼车
 */

// @lc code=start
//自己--能量走路模式
function carPooling(trips: number[][], capacity: number): boolean {
  let map = new Map()
  for (const trip of trips) {
    map.set(trip[1], map.has(trip[1]) ? map.get(trip[1]) + trip[0] : trip[0])
    map.set(trip[2], map.has(trip[2]) ? map.get(trip[2]) - trip[0] : -trip[0])
  }
  let count = 0
  for (let i = 0; i <= 1000; i++) {
    if (map.has(i)) {
      count += map.get(i)
      if (count > capacity) return false
    }
  }
  return true
}
// @lc code=end

carPooling(
  [
    [2, 1, 5],
    [3, 3, 7]
  ],
  4
)
