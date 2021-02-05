/*
 * @lc app=leetcode.cn id=1208 lang=typescript
 *
 * [1208] 尽可能使字符串相等
 */

//提示--双指针解法，滑动窗口问题

// @lc code=start
function equalSubstring(s: string, t: string, maxCost: number): number {
  let res = 0
  const list = []
  const Len = s.length
  for (let i = 0; i < Len; i++) {
    list.push(help(s[i], t[i]))
  }
  //这里可以改成指针
  const temp = []
  let count = 0
  for (let i = 0; i < Len; i++) {
    while (temp.length > 0 && count + list[i] > maxCost) {
      count -= temp.shift() as number
    }
    if (count + list[i] <= maxCost) {
      count += list[i]
      temp.push(list[i])
    }
    res = Math.max(res, temp.length)
  }

  return res
  function help(x: string, y: string): number {
    return Math.abs(x.charCodeAt(0) - y.charCodeAt(0))
  }
};
// @lc code=end

//2
console.log(equalSubstring("krrgw",
  "zjxss"
  , 19))

console.log(equalSubstring("abcd", "bcdf", 3))