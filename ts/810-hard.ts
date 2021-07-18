/*
 * @lc app=leetcode.cn id=810 lang=typescript
 *
 * [810] 黑板异或游戏
 */

//参考--数学推导

// @lc code=start
function xorGame(nums: number[]): boolean {
  let all = 0
  nums.forEach((v, i) => {
    all ^= v
  })
  return all === 0 || nums.length % 2 === 0
};
// @lc code=end

