/**
 * 参考--时间NlogN-贪心--二分
 * dp二维-N^2-超时
 * 贪心--维护一个weight的递增的序列
 * @param height 
 * @param weight 
 */
function bestSeqAtIndex(height: number[], weight: number[]): number {
  if (height.length === 0) return 0

  const dp: number[] = []
  const list = []
  for (let i = 0; i < height.length; i++) {
    list.push([height[i], weight[i]])
  }
  list.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]))

  let res = 1
  for (const curr of list) {
    let left = 0
    let right = res
    let curr_w = curr[1]
    while (left < right) {
      const mid = left + ((right - left) >> 1)
      if (dp[mid] < curr_w) {
        left = mid + 1
      } else {
        right = mid
      }
    }
    dp[left] = curr_w
    if (left === res) res++
  }
  return res
}

bestSeqAtIndex([1, 2, 2, 2, 3], [4, 5, 6, 7, 8])
