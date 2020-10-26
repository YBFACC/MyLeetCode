//参考--dp+hash
//dp记录i之前，和为target的数组最小长度
//都是正数=>和是递增的--和减去target可以得到唯一下标
function minSumOfLengths(arr: number[], target: number): number {
  const Len = arr.length
  const map = new Map()
  const dp = Array.from({ length: Len + 1 }, () => Len + 1)
  let res = Len + 1
  let sum = 0
  map.set(0, -1)
  for (let i = 0; i < Len; i++) {
    sum += arr[i]
    map.set(sum, i)
    if (i > 0) dp[i] = dp[i - 1]
    if (map.has(sum - target)) {
      let pre = map.get(sum - target)
      if (pre >= 0 && dp[pre] <= Len) { res = Math.min(res, i - pre + dp[pre]) }
      dp[i] = Math.min(dp[i], i - pre)
    }
  }
  return res > Len ? -1 : res
};
minSumOfLengths([3, 1, 1, 1, 5, 1, 2, 1], 3)