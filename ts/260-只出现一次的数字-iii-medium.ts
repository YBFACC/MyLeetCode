/*
 * @lc app=leetcode.cn id=260 lang=typescript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
//自己--用异或分成2队
function singleNumber(nums: number[]): number[] {
  let res = 0
  for (const num of nums) {
    res ^= num
  }
  let temp = 1
  while ((res & 1) === 0) {
    temp <<= 1
    res >>>= 1
  }
  let res1 = 0
  let res2 = 0
  for (const num of nums) {
    if ((num & temp) === 0) {
      res1 ^= num
    } else {
      res2 ^= num
    }
  }
  return [res1, res2]
};
// @lc code=end

singleNumber([1, 2, 1, 3, 2, 5])