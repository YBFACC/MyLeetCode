/*
 * @lc app=leetcode.cn id=149 lang=typescript
 *
 * [149] 直线上最多的点数
 */

//参考--最大公约数

// @lc code=start
function maxPoints(points: number[][]): number {
  const Len = points.length
  if (Len < 2) return Len
  let res = 0
  //确定一个点，确定斜率，固定斜率
  for (let i = 0; i < Len; i++) {
    if (res >= Len - i || res > Len / 2) break
    const map = new Map()
    for (let j = i + 1; j < Len; j++) {
      let x = points[i][0] - points[j][0]
      let y = points[i][1] - points[j][1]
      if (x === 0) {
        y = 1
      } else if (y === 0) {
        x = 1
      } else {
        if (y < 0) {
          ;[x, y] = [-x, -y]
        }
        const gcdXY = gcd(x, y)
        x /= gcdXY
        y /= gcdXY
      }
      const key = y + x * 20001
      map.set(key, (map.get(key) || 0) + 1)
    }
    for (const v of map.values()) {
      res = Math.max(res, v + 1)
    }
  }
  return res
};
const gcd = (a: number, b: number) => b !== 0 ? gcd(b, a % b) : a
// @lc code=end
