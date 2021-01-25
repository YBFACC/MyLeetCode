/*
 * @lc app=leetcode.cn id=1128 lang=typescript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

//参考--看不懂题意--排列组合

// @lc code=start
function numEquivDominoPairs(dominoes: number[][]): number {
  let res = 0
  const map = Array.from({ length: 100 }, () => 0)
  for (const item of dominoes) {
    item.sort()
    res += map[item[0] * 10 + item[1]]++
  }
  return res
};
// @lc code=end

