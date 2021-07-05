/*
 * @lc app=leetcode.cn id=168 lang=typescript
 *
 * [168] Excel表列名称
 */

//参考--26进制
//普通的是[0...25],这是[1,26]，所以计算的时候每层记得-1

// @lc code=start
function convertToTitle(columnNumber: number): string {
  let res = []

  while (columnNumber >= 1) {
    columnNumber--
    let floor = columnNumber % 26
    res.push(String.fromCharCode(floor + 65))
    columnNumber /= 26
  }

  res.reverse()
  return res.join('')
};
// @lc code=end

console.log(convertToTitle(1))