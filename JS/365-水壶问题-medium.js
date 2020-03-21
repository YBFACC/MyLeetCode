/*
 * @lc app=leetcode.cn id=365 lang=javascript
 *
 * [365] 水壶问题
 */

// @lc code=start
/**
 * 参考--裴蜀定理和gcd--性能好
 *
 * 裴蜀定理
 *
 * 若a,b是整数,且gcd(a,b)=d，
 * 那么对于任意的整数x,y,ax+by都一定是d的倍数，
 * 特别地，一定存在整数x,y，使ax+by=d成立。
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
  if (x === z || y === z) return true
  if (x + y < z) return false
  const GCD = (a, b) => (b === 0 ? a : GCD(b, a % b))
  return z % GCD(x, y) === 0
}
// @lc code=end
