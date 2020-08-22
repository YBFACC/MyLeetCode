/*
 * @lc app=leetcode.cn id=201 lang=typescript
 *
 * [201] 数字范围按位与
 */

// @lc code=start
//参考--找到公共前缀
//0&1&1&1&1=0
function rangeBitwiseAnd(m: number, n: number): number {
  let shift = 0
  while (m < n) {
    m >>= 1
    n >>= 1
    shift++
  }
  return n << shift
}
// @lc code=end
console.log(rangeBitwiseAnd(0, 2147483647))
