/*
 * @lc app=leetcode.cn id=995 lang=typescript
 *
 * [995] K 连续位的最小翻转次数
 */

//参考官方题解--贪心+差分
//从头开始即可，保证没有漏过一个数字(改变先后顺序并不影响最终翻转的结果)
//差分记录当前值变过的差值

// @lc code=start
var minKBitFlips = function (A: number[], K: number) {
  const Len = A.length
  const diff = Array.from({ length: Len }, () => 0)
  let res = 0, recNum = 0
  for (let i = 0; i < Len; i++) {
    recNum += diff[i]
    if ((recNum + A[i]) % 2 === 0) {
      if (i + K > Len) { return -1 }
      res++
      recNum++
      diff[i + K]--
    }
  }
  return res
};

// @lc code=end

minKBitFlips([0, 0, 0, 1, 0, 1, 1, 0], 3)