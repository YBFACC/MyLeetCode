/*
 * @lc app=leetcode.cn id=403 lang=typescript
 *
 * [403] 青蛙过河
 */

//参考--dp
//set有更好的性能表现
//在第i项，含有能到第i项的所有k值

// @lc code=start
function canCross(stones: number[]): boolean {
  const Len = stones.length
  const dp: Map<number, Set<number>> = new Map()
  for (const stone of stones) {
    dp.set(stone, new Set())
  }
  dp.get(0).add(0)
  if (stones[1] > 1) return false
  for (let i = 0; i < Len; i++) {
    for (const k of dp.get(stones[i])) {
      for (let step = k - 1; step <= k + 1; step++) {
        if (step > 0 && dp.has(stones[i] + step)) {
          dp.get(stones[i] + step).add(step)
        }
      }
    }
  }
  return dp.get(stones[Len - 1]).size > 0
};
// @lc code=end

