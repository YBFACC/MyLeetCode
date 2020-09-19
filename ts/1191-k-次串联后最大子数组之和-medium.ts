/*
 * @lc app=leetcode.cn id=1191 lang=typescript
 *
 * [1191] K 次串联后最大子数组之和
 */

// @lc code=start
//参考--最大子数组变体
//k===1=>返回最大子数组
//k>=2=>
//    数组sum是否为正数？
//                  否=>res=最大前缀+最大后缀
//                  是=>res=最大前缀+最大后缀+（k-2）*sum
//    =>max（最大子数组，res)
function kConcatenationMaxSum(arr: number[], k: number): number {
  const maxsub = maxSub(arr)

  let sum = 0
  for (const item of arr) {
    sum += item
  }
  let temp1 = 0
  let maxStart = 0
  for (const item of arr) {
    temp1 += item
    maxStart = Math.max(maxStart, temp1)
  }

  let temp2 = 0
  let maxEnd = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    temp2 += arr[i]
    maxEnd = Math.max(temp2, maxEnd)
  }
  let res = 0
  if (k === 1) res = maxsub
  else {
    if (sum < 0) {
      res = maxStart + maxEnd
    } else {
      res = maxStart + maxEnd + (k - 2) * sum
    }
  }
  return res % 1000000007
};
function maxSub(arr: number[]): number {
  let maxEnd = 0
  let maxSub = 0
  for (let i = 0; i < arr.length; i++) {
    maxEnd = Math.max(arr[i] + maxEnd, 0, arr[i])
    maxSub = Math.max(maxEnd, maxSub)
  }
  return maxSub
}
// @lc code=end

console.log(kConcatenationMaxSum([1, -2, 1], 5))