/*
 * @lc app=leetcode.cn id=1137 lang=typescript
 *
 * [1137] 第 N 个泰波那契数
 */
//参考--类似斐波那契数
// @lc code=start
function tribonacci(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;
  let res: number = 0
  let a = 0, b = 1, c = 1
  n -= 2
  while (n-- > 0) {
    res = a + b + c
    a = b
    b = c
    c = res
  }

  return res
};
// @lc code=end

