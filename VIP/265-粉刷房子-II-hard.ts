//自己--256升级版dp--NK^2

// function minCostII(costs: number[][]): number {
//   const Len = costs.length
//   if (Len === 0) return 0
//   const K = costs[0].length
//   const dp = Array.from({ length: Len + 1 }, () =>
//     Array.from({ length: K }, () => 0))
//   for (let i = 1; i <= Len; i++) {
//     for (let k = 0; k < K; k++) {
//       const left = dp[i - 1].slice(0, k)
//       const right = dp[i - 1].slice(k + 1)
//       if (left.length + right.length > 0) {
//         dp[i][k] = Math.min(...left, ...right) + costs[i - 1][k]
//       } else {
//         dp[i][k] = costs[i - 1][k]
//       }
//     }
//   }
//   return Math.min(...dp[Len])
// };

//参考--优化dp--滚动数组--NK

function minCostII(costs: number[][]): number {
  const Len = costs.length
  if (Len === 0) return 0
  const K = costs[0].length
  let minColor = -1
  let minCost = 0
  let secondCost = 0
  for (let i = 1; i <= Len; i++) {
    const temp = [-1, Infinity, Infinity]
    for (let k = 0; k < K; k++) {
      const floor = costs[i - 1][k] + (k === minColor ? secondCost : minCost)

      if (floor < temp[1]) {
        temp[0] = k
        temp[2] = temp[1]
        temp[1] = floor
      }
      else if (floor < temp[2]) {
        temp[2] = floor
      }
    }
    minColor = temp[0]
    minCost = temp[1]
    secondCost = temp[2]
  }
  return Math.min(minCost, secondCost)
};

console.log(minCostII([[1, 5, 3], [2, 9, 4]]))