/*
 * @lc app=leetcode.cn id=274 lang=typescript
 *
 * [274] H 指数
 */

//参考--二分
//绕晕了，麻了

// @lc code=start
function hIndex(citations: number[]): number {
  const Len = citations.length
  citations.sort((a, b) => a - b)
  let left = 0, right = Len - 1
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (citations[mid] >= citations.length - mid) right = mid
    else left = mid + 1
  }
  let h = citations.length - left
  return citations[left] >= h ? h : 0
};
// @lc code=end
hIndex([3, 0, 6, 1, 5])
//1
hIndex([1, 3, 1])
//2
hIndex([11, 15])
//1
hIndex([0, 1])
