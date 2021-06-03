/*
 * @lc app=leetcode.cn id=231 lang=typescript
 *
 * [231] 2的幂
 */

//提示--大于0
//Brian Kernighan

// @lc code=start
function isPowerOfTwo(n: number): boolean {

  return n > 0 && (n & (n - 1)) === 0
};
// @lc code=end

console.log(isPowerOfTwo(0))
