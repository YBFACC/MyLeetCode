/*
 * @lc app=leetcode.cn id=390 lang=typescript
 *
 * [390] 消除游戏
 */

//提示--找规律

// @lc code=start
function lastRemaining(n: number): number {
  let diff = 1
  let start = 1
  let count = n
  let odd = true
  while (count > 1) {
    if (odd) {
      start += diff
    } else if (count % 2 === 1) {
      start += diff
    }
    diff *= 2
    odd = !odd
    count >>= 1
  }
  return start
};
// @lc code=end

lastRemaining(6)

lastRemaining(9)