/*
 * @lc app=leetcode.cn id=403 lang=typescript
 *
 * [403] 青蛙过河
 */

// @lc code=start
//参考--dp
function canCross(stones: number[]): boolean {
  const Len = stones.length
  //第i项--jump值
  const dp = new Map()
  //map-嵌套map耗时太高--没有set简练
  for (const stone of stones) {
    dp.set(stone, new Map())
  }

  dp.get(0).set(0, true)
  if (stones[1] > 1) return false
  for (let i = 0; i < Len; i++) {
    for (let j = 0; j < i; j++) {
      const k = stones[i] - stones[j]
      const value = dp.get(stones[j]).get(k - 1) || dp.get(stones[j]).get(k) || dp.get(stones[j]).get(k + 1)
      dp.get(stones[i]).set(k, value)
      if (i == Len - 1 && value) {
        return true;
      }
    }
  }

  return false
};
// @lc code=end
console.log(canCross([0, 1, 2147483647]))
console.log(canCross([0, 2]))
console.log(canCross([0, 1, 2, 3, 4, 8, 9, 11]))
console.log(canCross([0, 1, 3, 5, 6, 8, 12, 17]))