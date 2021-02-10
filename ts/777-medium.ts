/*
 * @lc app=leetcode.cn id=777 lang=typescript
 *
 * [777] 在LR字符串中交换相邻字符
 */

//参考--脑筋急转弯
//L和R不可以交换位置
//L始终只能往右，R始终只能往左

// @lc code=start
function canTransform(start: string, end: string): boolean {
  if (start.replace(/X/g, "") !== end.replace(/X/g, "")) return false
  let t = 0
  for (let i = 0; i < start.length; i++) {
    if (start[i] === 'L') {
      while (end[t] !== 'L') t++
      if (i < t++) return false
    }
  }
  t = 0
  for (let i = 0; i < start.length; i++) {
    if (start[i] === 'R') {
      while (end[t] !== 'R') t++
      if (i > t++) return false
    }
  }

  return true
};
// @lc code=end

console.log(canTransform("LLR", "RRL"))

console.log(canTransform("RXXLRXRXL", "XRLXXRRLX"))