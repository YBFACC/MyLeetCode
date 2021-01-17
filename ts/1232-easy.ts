/*
 * @lc app=leetcode.cn id=1232 lang=typescript
 *
 * [1232] 缀点成线
 */

//自己--斜率--注意k为Infinity

// @lc code=start
function checkStraightLine(coordinates: number[][]): boolean {
  const [x1, y1] = coordinates[0]
  const [x2, y2] = coordinates[1]
  const k = (y2 - y1) / (x2 - x1)
  const b = y1 - k * x1
  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i]
    if (k === Infinity) {
      if (x !== x1) {
        return false
      }
      continue
    }
    if (y !== k * x + b) return false
  }
  return true
};
// @lc code=end

console.log(checkStraightLine(
  [[0, 0], [0, 1], [0, -1]]
))