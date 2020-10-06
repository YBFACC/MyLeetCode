/*
 * @lc app=leetcode.cn id=1422 lang=typescript
 *
 * [1422] 分割字符串的最大得分
 */

// @lc code=start
//copy--凑3题
function maxScore(s: string): number {
  let len = s.length, max = 0
  for (let i = 1; i < len; i++) {
    let left = s.slice(0, i), right = s.slice(i, len)
    let n = 0
    for (let j = 0; j < left.length; j++) {
      if (left[j] === '0') n++
    }
    for (let j = 0; j < right.length; j++) {
      if (right[j] === '1') n++
    }
    if (max < n) max = n
  }
  return max
};
// @lc code=end

