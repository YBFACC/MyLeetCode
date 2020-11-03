/*
 * @lc app=leetcode.cn id=974 lang=typescript
 *
 * [974] 和可被 K 整除的子数组
 */
//自己--重做--同余定理
//相同的模值a的数量i-1=count
//(1+count)*count/2
// @lc code=start
var subarraysDivByK = function (A: number[], K: number): number {
  let prefix = 0
  const map = new Map()
  map.set(0, 1)
  for (const num of A) {
    prefix = (prefix + num) % K
    while (prefix < 0) prefix += K
    map.set(prefix, map.has(prefix) ? map.get(prefix) + 1 : 1)
  }
  let res = 0

  map.forEach((v, k) => {
    res += (1 + v - 1) * (v - 1) / 2
  })

  return res
};
// @lc code=end
//1
subarraysDivByK([7, 4, -10], 5)
subarraysDivByK([4, 5, 0, -2, -3, 1], 5)