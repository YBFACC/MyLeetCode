/*
 * @lc app=leetcode.cn id=1720 lang=typescript
 *
 * [1720] 解码异或后的数组
 */

//自己--异或

// 记得位运算有几种常见的用法：
//     异或自身奇数次等于自身
//     A & （A-1）去掉最后一位1
//     A & 1 == 0 判断奇偶

// @lc code=start
function decode(encoded: number[], first: number): number[] {
  const res = [first]

  for (let i = 0; i < encoded.length; i++) {
    res.push(res[res.length - 1] ^ encoded[i])
  }
  return res
};
// @lc code=end

decode([1, 2, 3], 1)
decode([6, 2, 7, 3], 4)