/*
 * @lc app=leetcode.cn id=1423 lang=typescript
 *
 * [1423] 可获得的最大点数
 */

//自己--2次前缀和+双指针

//可以变成A+A数组加倍，变成滑窗问题
// @lc code=start
function maxScore(cardPoints: number[], k: number): number {
  if (cardPoints.length === 0 || k === 0) return 0
  const Len = cardPoints.length
  const up = [cardPoints[0]]
  const down = []
  down[Len - 1] = cardPoints[Len - 1]
  let res = Math.max(cardPoints[0], cardPoints[Len - 1])
  let all = cardPoints[0]
  for (let i = 1; i < Len; i++) {
    up[i] = up[i - 1] + cardPoints[i]
    all += cardPoints[i]
    if (i === k - 1) {
      res = Math.max(res, up[i])
    }
  }
  //直接输出cardPoints
  if (k >= Len) return all

  for (let i = Len - 2; i >= 0; i--) {
    down[i] = down[i + 1] + cardPoints[i]
    if (i === Len - k) {
      res = Math.max(res, down[i])
    }
  }
  for (let i = 0; i < k - 1; i++) {
    const right = Len - k + i + 1
    res = Math.max(res, up[i] + down[right])
  }
  return res
};
// @lc code=end

maxScore([1, 1000, 1], 1)

console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7))