/*
 * @lc app=leetcode.cn id=137 lang=typescript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
//自己--需要开一个32位数组
var singleNumber = function (nums: number[]): number {
  const counts = new Int16Array(32);
  for (let num of nums) {
    for (let j = 0; j < 32; j++) {
      counts[j] += num & 1;
      num >>>= 1;
    }
  }
  let res = 0
  for (let i = 0; i < 32; i++) {
    res <<= 1;
    res |= counts[31 - i] % 3;
  }
  return res;
};
// @lc code=end

