/*
 * @lc app=leetcode.cn id=1052 lang=typescript
 *
 * [1052] 爱生气的书店老板
 */

//自己--滑动窗口问题--双指针
//统计肯定满意的用户，加上抑制自己的情绪期间的用户

// @lc code=start
function maxSatisfied(customers: number[], grumpy: number[], X: number): number {
  const Len = customers.length
  let base = 0
  for (let i = 0; i < Len; i++) {
    if (grumpy[i] === 0) {
      base += customers[i]
    }
  }
  for (let i = 0; i < X; i++) {
    if (grumpy[i] === 1) {
      base += customers[i]
    }
  }
  let res = base
  res = Math.max(res, base)
  let left = 0
  let right = X
  while (right < Len) {
    if (grumpy[left] === 1) {
      base -= customers[left]
    }
    if (grumpy[right] === 1) {
      base += customers[right]
    }
    left++
    right++
    res = Math.max(res, base)
  }

  return res
};
// @lc code=end

maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)