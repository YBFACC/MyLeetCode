/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * 参考--求素数
 * 提前打表--去除肯定不是素数
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const list = Array.from({ length: n + 1 }, () => true)
  let count = 0
  for (let i = 2; i < n; i++) {
    if (!list[i]) continue
    for (let j = 2 * i; j <= n; j += i) {
      list[j] = false
    }
  }

  for (let i = 2; i < n; i++) {
    if (list[i]) count++
  }
  return count
}

// @lc code=end
console.log(countPrimes(2))
