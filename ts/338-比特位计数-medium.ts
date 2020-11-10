/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * [338] 比特位计数
 */

//自己--dp--2^i+K与2^(i-1)+K相差1个1

// @lc code=start
function countBits(num: number): number[] {
  if (num === 0) return [0]
  if (num === 1) return [0, 1]
  const res = [0, 1]

  let size = 2
  while (res.length <= num) {
    const Len = res.length
    for (let i = 0; i < Len && res.length <= num; i++) {
      res[i + size] = res[i] + 1
    }
    size *= 2
  }

  return res
};
// @lc code=end

countBits(17)