//比赛想不到--dp
//dp0代表i左边的红色树叶=>dp0[i]=dp[i-1]+(i==r?0:1)
//dp1代表i左边的黄色树叶=>dp1[i]=min(dp0[i-1],dp1[i-1])+(i==y?0:1)
//dp2代表1右边的红色树叶=>dp2[i]=min(dp1[i-1],dp2[i-1])+(i==r?0:1)
function minimumOperations(leaves: string): number {
  const Len = leaves.length
  const dp0 = Array.from({ length: Len }, () => 0)
  const dp1 = Array.from({ length: Len }, () => 0)
  const dp2 = Array.from({ length: Len }, () => 0)
  dp0[0] = helper(leaves[0], 'r')
  dp1[0] = Len
  dp2[0] = Len
  for (let i = 1; i < Len-1; i++) {
    dp0[i] = dp0[i - 1] + helper(leaves[i], 'r')
  }

  for (let i = 1; i < Len-1; i++) {
    dp1[i] = Math.min(dp0[i - 1], dp1[i - 1]) + helper(leaves[i], 'y')
  }

  for (let i = 1; i < Len; i++) {
    dp2[i] = Math.min(dp1[i - 1], dp2[i - 1]) + helper(leaves[i], 'r')
  }

  return dp2[Len - 1]
}

function helper(char: string, target: string): number {
  return char === target ? 0 : 1
}

console.log(minimumOperations("rrryyyrryyyrr"))