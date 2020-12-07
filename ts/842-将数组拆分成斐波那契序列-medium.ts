/*
 * @lc app=leetcode.cn id=842 lang=typescript
 *
 * [842] 将数组拆分成斐波那契序列
 */

//自己--回溯

// @lc code=start
function splitIntoFibonacci(S: string): number[] {
  const Len = S.length
  const limit = 2 ** 31 - 1
  let res: number[] = []
  const dfs = function (start: number, temp: number[]) {
    const count = temp.length - 1
    if (S[start] === '0') {
      if (temp.length < 2 ||
        temp[count - 1] + temp[count] === 0) {
        temp.push(0)
        dfs(start + 1, temp)
        temp.pop()
      }
      return
    }
    if (start === Len && temp.length > res.length) {
      res = temp.slice()
      return
    }
    for (let i = start + 1; i <= Len; i++) {
      const num = parseInt(S.slice(start, i), 10)
      if (num > limit) break
      if (temp.length < 2 ||
        temp[count - 1] + temp[count] === num) {
        temp.push(num)
        dfs(i, temp)
        temp.pop()
      }
    }
  }
  dfs(0, [])
  return res.length < 3 ? [] : res
};

// @lc code=end

splitIntoFibonacci("112358130")

splitIntoFibonacci("1101111")

splitIntoFibonacci('0000')