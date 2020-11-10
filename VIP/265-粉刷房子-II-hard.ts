//自己--256升级版dp--NK^2

function minCostII(costs: number[][]): number {
  const Len = costs.length
  if (Len === 0) return 0
  const K = costs[0].length
  const dp = Array.from({ length: Len + 1 }, () =>
    Array.from({ length: K }, () => 0))
  for (let i = 1; i <= Len; i++) {
    for (let k = 0; k < K; k++) {
      const left = dp[i - 1].slice(0, k)
      const right = dp[i - 1].slice(k + 1)
      if (left.length + right.length > 0) {
        dp[i][k] = Math.min(...left, ...right) + costs[i - 1][k]
      } else {
        dp[i][k] = costs[i - 1][k]
      }
    }
  }
  return Math.min(...dp[Len])
};

console.log(minCostII([[8]]))