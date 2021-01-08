/*
 * @lc app=leetcode.cn id=605 lang=typescript
 *
 * [605] 种花问题
 */

//提示--贪心--能载就栽入

// @lc code=start
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (n === 0) return true
  let res = 0
  const Len = flowerbed.length

  for (let i = 0; i < Len; i++) {
    if (flowerbed[i] === 0 &&
      (i === 0 ? true : flowerbed[i - 1] === 0) &&
      (i === Len - 1 ? true : flowerbed[i + 1] === 0)) {
      flowerbed[i] = 1
      res++
    }
  }

  return res >= n
};
// @lc code=end

console.log(canPlaceFlowers([0,0,1,0,1], 1))