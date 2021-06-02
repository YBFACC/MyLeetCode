/*
 * @lc app=leetcode.cn id=342 lang=typescript
 *
 * [342] 4的幂
 */

//参考--数学
//log(4^n)=n*log(4)


// @lc code=start
function isPowerOfFour(n: number): boolean {
  if (n <= 0) return false

  let i = Math.trunc(Math.log(n) / Math.log(4))
  return i * Math.log(4) === Math.log(n)
};
// @lc code=end

