/*
 * @lc app=leetcode.cn id=403 lang=typescript
 *
 * [403] 青蛙过河
 */

// @lc code=start
//参考--dp
function canCross(stones: number[]): boolean {
  const Len = stones.length
  //第i个石头到第j个石头是否成功
  //使用set存储--到第i个石头的步长
  const dp = new Map()
  for (const stone of stones) {
    dp.set(stone, new Set())
  }

  dp.get(0).add(0)
  if (stones[1] > 1) return false
  for (let i = 0; i < Len; i++) {
    for (const k of dp.get(stones[i])) {
      for (let step = k - 1; step <= k + 1; step++) {
        if (step > 0 && dp.has(stones[i] + step)) {
          dp.get(stones[i] + step).add(step);
        }
      }
    }

  }

  return dp.get(stones[Len - 1]).size > 0;
};
// @lc code=end
console.log(canCross([0, 1, 2147483647]))
console.log(canCross([0, 2]))
console.log(canCross([0, 1, 2, 3, 4, 8, 9, 11]))
console.log(canCross([0, 1, 3, 5, 6, 8, 12, 17]))