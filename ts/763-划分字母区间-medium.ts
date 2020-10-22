/*
 * @lc app=leetcode.cn id=763 lang=typescript
 *
 * [763] 划分字母区间
 */

// @lc code=start
//参考--贪心--使同一字母在同一段片段
function partitionLabels(S: string): number[] {
  const map = new Map()
  const res = []
  const Len = S.length
  for (let i = 0; i < Len; i++) {
    map.set(S[i], i)
  }
  let end = 0, start = 0
  for (let i = 0; i < Len; i++) {
    end = Math.max(end, map.get(S[i]))
    if (i === end) {
      res.push(end - start + 1)
      start = i + 1
    }
  }
  return res
};
// @lc code=end

partitionLabels("ababcbacadefegdehijhklij")