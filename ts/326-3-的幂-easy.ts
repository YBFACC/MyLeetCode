/*
 * @lc app=leetcode.cn id=326 lang=typescript
 *
 * [326] 3的幂
 */

// @lc code=start
//参考--数学方法-求指数
//%1来验证是否是整数
function isPowerOfThree(n: number): boolean {
  return (Math.log10(n) / Math.log10(3)) % 1 === 0
};
// @lc code=end

