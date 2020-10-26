/*
 * @lc app=leetcode.cn id=1220 lang=typescript
 *
 * [1220] 统计元音字母序列的数目
 */

// @lc code=start
//自己--画出字母间的状态转移图--快速矩阵幂
function countVowelPermutation(n: number): number {

  let list = Array.from({ length: 5 }, () => 1)
  for (let i = 1; i < n; i++) {
    const temp = []
    temp[0] = (list[1]) % 1000000007
    temp[1] = (list[0] + list[2]) % 1000000007
    temp[2] = (list[0] + list[1] + list[3] + list[4]) % 1000000007
    temp[3] = (list[2] + list[4]) % 1000000007
    temp[4] = (list[0]) % 1000000007
    list = temp
  }
  return list.reduce((pre, curr) => (pre + curr) % 1000000007, 0)
};
// @lc code=end

console.log(countVowelPermutation(5))