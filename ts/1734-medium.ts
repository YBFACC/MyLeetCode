/*
 * @lc app=leetcode.cn id=1734 lang=typescript
 *
 * [1734] 解码异或后的排列
 */

//参考--数学问题
//利用异或算出prem[0]的值，encoded偶数项异或===prem[1]~prem[n],total===prem[0]~prem[n]
//降为简单题

// @lc code=start
function decode(encoded: number[]): number[] {
  let total = 0, odd = 0
  const n = encoded.length + 1
  for (let i = 0; i <= n; i++) {
    total ^= i
  }
  for (let i = 1; i < n - 1; i += 2) {
    odd ^= encoded[i]
  }
  const res = [total ^ odd]
  for (let i = 0; i < n - 1; i++) {
    res[i + 1] = res[i] ^ encoded[i]
  }
  return res
};
// @lc code=end

