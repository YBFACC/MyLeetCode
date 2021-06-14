/*
 * @lc app=leetcode.cn id=137 lang=typescript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
//提示--32位各位模3

var singleNumber = function (nums: number[]): number {
  const list = Array.from({ length: 32 }, () => 0)
  for (let num of nums) {
    for (let i = 0; i < 32; i++) {
      list[i] += num & 1
      num >>>= 1
    }
  }
  let res = 0
  for (let i = 0; i < 32; i++) {
    res <<= 1
    res += list[31 - i] % 3
  }
  return res
};
// @lc code=end

