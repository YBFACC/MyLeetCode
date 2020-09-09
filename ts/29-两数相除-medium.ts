/*
 * @lc app=leetcode.cn id=29 lang=typescript
 *
 * [29] 两数相除
 */

// @lc code=start
//参考--二进制模拟乘法逼近被除数--负数处理避免移除溢出
//负数逼近比较难想
function divide(dividend: number, divisor: number): number {
  if (dividend === 0) return 0
  let sign = (dividend > 0) == !(divisor > 0)
  if (dividend > 0) dividend = -dividend;
  if (divisor > 0) divisor = -divisor;
  var INT_MAX = 0x7FFFFFFF;
  var INT_MIN = 1 << 31;
  let res = 0

  while (dividend <= divisor) {
    let count = 0
    let temp_divisor = divisor
    while (dividend <= (temp_divisor << 1)) {
      if (temp_divisor <= (INT_MIN >> 1)) break
      temp_divisor <<= 1
      count++
    }
    res += -1 << count
    dividend -= temp_divisor
  }

  if (!sign) {
    if (res <= INT_MIN) return INT_MAX
    res = -res
  }
  return res
};

// @lc code=end

console.log(divide(-2147483648
  , 1))