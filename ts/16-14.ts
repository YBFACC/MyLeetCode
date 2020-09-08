//参考--方程的使用
//A = Y2 - Y1 B = X1 - X2 C = X2Y1 - X1Y2
function bestLine(points: number[][]): number[] {
  const Len = points.length
  let res: any
  let max_res = 0
  const map = new Map()
  for (let i = 0; i < Len; i++) {
    for (let j = i + 1; j < Len; j++) {
      let A = points[j][1] - points[i][1]
      let B = points[i][0] - points[j][0]
      let C = points[j][0] * points[i][1] - points[i][0] * points[j][1]
      const commom = gcd(gcd(A, B), C)
      A /= commom
      B /= commom
      C /= commom
      const str = `${A},${B},${C}`
      if (!map.has(str)) {
        map.set(str, new Set())
      }
      map.get(str).add(i)
      map.get(str).add(j)
      if (map.get(str).size > max_res) {
        res = map.get(str)
        max_res = map.get(str).size
      }
    }
  }
  const temp = [...res].sort((a, b) => a - b)
  return [temp[0], temp[1]]
};

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b)
}


bestLine([[0, 0], [1, 1], [1, 0], [2, 0]])