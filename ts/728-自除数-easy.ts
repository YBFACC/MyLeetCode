/*
 * @lc app=leetcode.cn id=728 lang=typescript
 *
 * [728] 自除数
 */

//暴力

// @lc code=start
function selfDividingNumbers(left: number, right: number): number[] {
  const list = []

  for (let i = left; i <= right; i++) {
    const str = i + ''
    let temp = true
    for (let j = 0; j < str.length; j++) {
      const bit = +str[j]
      if (bit === 0 || i % bit !== 0) {
        temp = false
      }
    }
    temp ? list.push(i) : null
  }

  return list
};
// @lc code=end

selfDividingNumbers(1, 22)