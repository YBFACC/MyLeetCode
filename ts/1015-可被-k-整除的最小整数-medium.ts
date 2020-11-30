/*
 * @lc app=leetcode.cn id=1015 lang=typescript
 *
 * [1015] 可被 K 整除的最小整数
 */

//copy--数论

// @lc code=start

var smallestRepunitDivByK = function (K: number) {
  if ((K % 2) == 0 || (K % 5) == 0) return -1

  let num = 1
  let len = 1

  while ((num % K) !== 0) {
    num = (num * 10 + 1) % K
    len++
  }
  return len
};

// @lc code=end

smallestRepunitDivByK(3)