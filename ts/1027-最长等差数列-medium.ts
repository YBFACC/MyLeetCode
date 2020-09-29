
//参考--类似lis-Int16Array降低内存消耗
function longestArithSeqLength(A: number[]): number {
  const Len = A.length
  const offset = 10000//处理负数情况

  const dp = Array.from({ length: Len }, () => new Int16Array(20001))
  let res = 0
  for (let i = 1; i < Len; i++) {
    for (let j = 0; j < i; j++) {
      const temp = A[i] - A[j]
      const index = temp + offset
      dp[i][index] = Math.max(dp[i][index], dp[j][index] + 1)
      res = Math.max(res, dp[i][index])
    }
  }
  return res + 1
};
longestArithSeqLength([9, 4, 7, 2, 10])