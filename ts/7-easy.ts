/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

//自己--重做--easy

// @lc code=start
function reverse(x: number): number {
  if (x === 0) return 0
  const max = 2 ** 31 - 1
  const min = -(2 ** 31)
  const negative = x < 0 ? 1 : 0
  x = Math.abs(x)
  x = +(x + '').split('').reverse().join('')
  x = negative === 1 ? -x : x
  if (x <= max && x >= min) return x
  return 0
};
// @lc code=end

reverse(1)