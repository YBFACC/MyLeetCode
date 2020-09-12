/*
 * @lc app=leetcode.cn id=984 lang=typescript
 *
 * [984] 不含 AAA 或 BBB 的字符串
 */

// @lc code=start
//自己--回溯
function strWithout3a3b(A: number, B: number): string {
  let res = ''
  const Ded = new Set()
  const dfs = function (temp: string, a: number, b: number) {
    if (res.length > 0) return
    if (a < 0 || b < 0) return
    if (a === 0 && b === 0) {
      res = temp
    }
    const char = temp[temp.length - 1]
    if (char === 'a') {
      if (Ded.has(`a,${a},${b}`)) return
      dfs(temp + 'b', a, b - 1)
      dfs(temp + 'bb', a, b - 2)
      Ded.add(`a,${a},${b}`)
    } else {
      if (Ded.has(`b,${a},${b}`)) return
      dfs(temp + 'a', a - 1, b)
      dfs(temp + 'aa', a - 2, b)
      Ded.add(`b,${a},${b}`)
    }
  }
  dfs('a', A - 1, B)
  dfs('aa', A - 2, B)
  dfs('b', A, B - 1)
  dfs('bb', A, B - 2)
  return res
};
// @lc code=end

strWithout3a3b(4, 1)