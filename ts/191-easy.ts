/*
 * @lc app=leetcode.cn id=191 lang=typescript
 *
 * [191] 位1的个数
 */

//自己--二进制

// @lc code=start
function hammingWeight(n: number): number {
  let count = 0
  while (n > 0) {
    if ((n & 1) === 1) {
      count++
    }
    n = n >>> 1
  }
  return count
};
// @lc code=end

hammingWeight(parseInt('11111111111111111111111111111101', 2))