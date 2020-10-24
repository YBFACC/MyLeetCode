/*
 * @lc app=leetcode.cn id=1024 lang=typescript
 *
 * [1024] 视频拼接
 */

// @lc code=start
//参考--排序+dp
//dp【j】代表0-j最小的选择
function videoStitching(clips: number[][], T: number): number {
  const Len = clips.length
  const dp = Array.from({ length: T + 1 }, () => 200)
  dp[0] = 0
  let res = 200
  clips.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })

  for (let i = 0; i < Len; i++) {
    const [start, end] = clips[i]
    if (dp[start] === 200) continue
    for (let j = start + 1; j <= end; j++) {
      dp[j] = Math.min(dp[j], dp[start] + 1)
    }
  }

  return dp[T] === 200 ? -1 : dp[T]
};
// @lc code=end
videoStitching([[0, 1], [1, 2]], 5)
//3
videoStitching([[0, 1], [6, 8], [0, 2], [5, 6], [0, 4], [0, 3], [6, 7], [1, 3], [4, 7], [1, 4], [2, 5], [2, 6], [3, 4], [4, 5], [5, 7], [6, 9]], 9)
//3
videoStitching([[0, 2], [4, 6], [8, 10], [1, 9], [1, 5], [5, 9]], 10)
