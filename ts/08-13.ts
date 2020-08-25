//参考--先按一边排序--N^2
//第i项往前遍历
function pileBox(box: number[][]): number {
  const Len = box.length
  box.sort((a, b) => a[0] - b[0])
  let res = 0
  const dp = Array.from({ length: Len }, () => 0)

  for (let i = 0; i < Len; i++) {
    dp[i] = box[i][2]
    for (let j = i - 1; j >= 0; j--) {
      if (
        box[j][0] < box[i][0] &&
        box[j][1] < box[i][1] &&
        box[j][2] < box[i][2]
      ) {
        dp[i] = Math.max(dp[i], box[i][2] + dp[j])
      }
    }
    res = Math.max(res, dp[i])
  }
  return res
}

console.log(
  pileBox([
    [1, 1, 1],
    [2, 3, 4],
    [2, 6, 7],
    [3, 4, 5]
  ])
)
