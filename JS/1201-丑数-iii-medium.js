/*
 * @lc app=leetcode.cn id=1201 lang=javascript
 *
 * [1201] 丑数 III
 */

// @lc code=start
/**
 * copy--二分法
 * 最小公倍数=A*B/最大公约数（辗转相除）
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const gcd = (a, b) => {
  if (b === 0n) {
    return a
  }
  return gcd(b, a % b)
}
var nthUglyNumber = function (n, a, b, c) {
  let low = BigInt(Math.min(a, b, c))
  let high = 2n * 10n ** 9n
  let A = BigInt(a)
  let B = BigInt(b)
  let C = BigInt(c)
  const N = BigInt(n)
  while (low < high) {
    const mid = (low + high) / 2n
    let count = mid / A + mid / B + mid / C
    count =
      count -
      mid / mcm(A, B) -
      mid / mcm(C, B) -
      mid / mcm(A, C) +
      mid / mcm(A, mcm(B, C))
    if (count < N) {
      low = mid + 1n
    } else high = mid
  }
  return low
}

function mcm(a, b) {
  return (a * b) / gcd(a, b)
}

// @lc code=end

nthUglyNumber(1000000000, 2, 217983653, 336916467)
