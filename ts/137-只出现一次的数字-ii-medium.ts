/*
 * @lc app=leetcode.cn id=137 lang=typescript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
//copy--使用掩码--3进制
var singleNumber = function (nums: number[]): number {
  let ones = 0, twos = 0;
  for (const num of nums) {
    ones = ones ^ num & ~twos;
    twos = twos ^ num & ~ones;
  }
  return ones;
};
// @lc code=end

