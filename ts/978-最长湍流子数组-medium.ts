/*
 * @lc app=leetcode.cn id=978 lang=typescript
 *
 * [978] 最长湍流子数组
 */

// @lc code=start
//参考--分成2个数组-看记录最长状态
//类似题做过-峰谷问题
//⚠️注意这里序列要求连续
function maxTurbulenceSize(A: number[]): number {
  if (A.length < 2) return A.length
  const up = Array.from({ length: A.length + 1 }, () => 0)
  const down = Array.from({ length: A.length + 1 }, () => 0)
  up[1] = 1
  down[1] = 1
  let res = 1
  for (let i = 2; i <= A.length; i++) {
    if (A[i - 1] > A[i - 2]) {
      up[i] = down[i - 1] + 1
      down[i] = 1
    }
    else if (A[i - 1] < A[i - 2]) {
      down[i] = up[i - 1] + 1
      up[i] = 1
    } else {
      down[i] = 1
      up[i] = 1
    }
    res = Math.max(up[i], down[i], res)
  }
  return res
};
// @lc code=end

console.log(maxTurbulenceSize([0, 1, 1, 0, 1, 0, 1, 1, 0, 0]))