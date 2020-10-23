/*
 * @lc app=leetcode.cn id=875 lang=typescript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
//自己--二分--找到最小速度
function minEatingSpeed(piles: number[], H: number): number {
  const Len = piles.length
  if (Len > H) return -1
  let max = Number.MIN_SAFE_INTEGER
  for (const pile of piles) {
    max = Math.max(max, pile)
  }
  let left = 0
  while (left < max) {
    const mid = left + ((max - left) >> 1)
    let temp = 0
    for (const pile of piles) {
      temp += Math.ceil(pile / mid)
    }
    if (temp <= H) {
      max = mid
    } else {
      left = mid + 1
    }
  }
  return max
};
// @lc code=end

console.log(minEatingSpeed([3, 6, 7, 11], 8))

console.log(minEatingSpeed([30, 11, 23, 4, 20], 5))
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6))