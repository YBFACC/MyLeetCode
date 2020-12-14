/*
 * @lc app=leetcode.cn id=1017 lang=typescript
 *
 * [1017] 负二进制转换
 */

//参考--2进制+长除法

// @lc code=start
function baseNeg2(N: number): string {
  if (N === 0) return '0'
  const res = []
  while (N !== 0) {
    if (Math.abs(N) % 2 === 0) {
      res.push('0')
      N = -(N >> 1)
    } else {
      res.push('1')
      if (N < 0) {
        //负数需要+1
        N = (Math.abs(N) + 1) >> 1
      } else {
        N = -((N - 1) >> 1)
      }
    }
  }

  return res.reverse().join('')
};
// @lc code=end

console.log(baseNeg2(2))