/*
 * @lc app=leetcode.cn id=978 lang=typescript
 *
 * [978] 最长湍流子数组
 */

// @lc code=start
//自己--类似376题--使用折线图记录连续峰谷
function maxTurbulenceSize(A: number[]): number {
  if (A.length < 2) return A.length
  let isUp = 0
  let res = 0
  let temp = 0
  for (let i = 1; i < A.length; i++) {
    if (A[i] > A[i - 1] && (isUp !== -1)) {
      isUp = -1
      res++
    } else if (A[i] < A[i - 1] && (isUp !== 1)) {
      isUp = 1
      res++
    } else if (A[i] === A[i - 1]) {
      temp = Math.max(temp, res)
      res = 0
      isUp = 0
    }
    else {
      i--
      temp = Math.max(temp, res)
      res = 0
      isUp = 0
    }
  }
  temp = Math.max(temp, res)
  return temp + 1
};
// @lc code=end

maxTurbulenceSize([2, 0, 2, 4, 2, 5, 0, 1, 2, 3])