/*
 * @lc app=leetcode.cn id=796 lang=typescript
 *
 * [796] 旋转字符串
 */

//自己--(A+A).includes(B)


// @lc code=start
function rotateString(A: string, B: string): boolean {
  if (A.length !== B.length) return false
  const all = A + A
  return all.includes(B)
};
// @lc code=end

