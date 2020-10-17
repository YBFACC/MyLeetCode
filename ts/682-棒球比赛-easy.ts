/*
 * @lc app=leetcode.cn id=682 lang=typescript
 *
 * [682] 棒球比赛
 */

// @lc code=start
function calPoints(ops: (string | number)[]): number {
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === 'C') {
      ops.splice(i - 1, 2)
      i -= 2
    }
  }
  let res = 0
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === 'D') {
      ops[i] = +(ops[i - 1] || 0) * 2
    } else if (ops[i] === '+') {
      ops[i] = +(ops[i - 1] || 0) + +(ops[i - 2] || 0)
    }
    res += +ops[i]
  }
  return res
};
// @lc code=end

