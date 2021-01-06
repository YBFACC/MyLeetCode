/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

//自己--重做--递归也可以

// @lc code=start
function fib(n: number): number {
  const list = [0, 1]
  for (let i = 2; i <= n; i++) {
    list[i] = list[i - 1] + list[i - 2]
  }
  return list[n]
};
// @lc code=end

console.log(fib(4))