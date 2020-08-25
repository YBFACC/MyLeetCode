//自己--dp3维-时间n^3
function pileBox(box: number[][]): number {
  let maxWidth = 0
  let maxHigh = 0
  let maxDeepth = 0
  for (const boxItem of box) {
    maxWidth = Math.max(maxWidth, boxItem[0])
    maxDeepth = Math.max(maxDeepth, boxItem[1])
    maxHigh = Math.max(maxHigh, boxItem[2])
  }

  const dp = Array.from({ length: maxWidth + 1 }, () =>
    Array.from({ length: maxDeepth + 1 }, () =>
      Array.from({ length: maxHigh + 1 }, () => 0)
    )
  )
  for (const boxItem of box) {
    const Width = boxItem[0]
    const Deepth = boxItem[1]
    const High = boxItem[2]
    dp[Width][Deepth][High] = High
  }
  for (let w = 1; w <= maxWidth; w++) {
    for (let d = 1; d <= maxDeepth; d++) {
      for (let h = 1; h <= maxHigh; h++) {
        if (dp[w][d][h] === 0) {
          dp[w][d][h] = Math.max(
            dp[w - 1][d - 1][h - 1],
            dp[w - 1][d][h],
            dp[w][d - 1][h],
            dp[w][d][h - 1]
          )
        } else {
          dp[w][d][h] = dp[w - 1][d - 1][h - 1] + dp[w][d][h]
        }
      }
    }
  }
  return dp[maxWidth][maxDeepth][maxHigh]
}

console.log(
  pileBox([
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
  ])
)
