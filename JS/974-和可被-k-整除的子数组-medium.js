/*
 * @lc app=leetcode.cn id=974 lang=javascript
 *
 * [974] 和可被 K 整除的子数组
 */

// @lc code=start
/**
 * 参考--前缀和+同余定理
 * (preSum[j]−preSum[i−1])modK==0
 * ⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎⬇︎
 * preSum[j]modK==preSum[i−1]modK
 * 前提： preSum[j]和preSum[i−1]不为负数
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
  let Prefix = 0
  let res = 0
  let map = new Map()
  map.set(0, 1)
  for (let i = 0; i < A.length; i++) {
    Prefix = (Prefix + A[i]) % K
    if (Prefix < 0) Prefix += K
    if (map.has(Prefix)) {
      res += map.get(Prefix)
      map.set(Prefix, map.get(Prefix) + 1)
    } else {
      map.set(Prefix, 1)
    }
  }

  return res
}
// @lc code=end

subarraysDivByK([4, 5, 0, -2, -3, 1], 5)
