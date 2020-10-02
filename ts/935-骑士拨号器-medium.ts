/*
 * @lc app=leetcode.cn id=935 lang=typescript
 *
 * [935] 骑士拨号器
 */

// @lc code=start
//参考--快速幂矩阵
function knightDialer(n: number): number {
  if (n === 1) return 10
  let nums = [1, 1, 1, 1]
  for (let i = 0; i < n - 1; i++) {
    nums = [(nums[1] + nums[2]) % 1000000007,
    (2 * nums[0]) % 1000000007,
    (2 * nums[0] + nums[3]) % 1000000007,
    (2 * nums[2]) % 1000000007]
  }
  return (4 * nums[0] + 2 * nums[1] + 2 * nums[2] + nums[3]) % 1000000007
};
// @lc code=end

knightDialer(3131)