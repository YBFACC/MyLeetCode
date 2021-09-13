//参考--O(n2)
//给的是回旋镖出现的路径的开始和结束点。

function numberOfBoomerangs(points: number[][]): number {
  const Len = points.length
  let res = 0
  for (let i = 0; i < Len; i++) {
    const map = new Map()
    for (let j = 0; j < Len; j++) {
      if (i === j) continue
      const x = points[i][0] - points[j][0], y = points[i][1] - points[j][1]
      const dist = x ** 2 + y ** 2
      map.set(dist, map.has(dist) ? map.get(dist) + 1 : 1)
    }
    for (const [k, v] of map.entries()) {
      res += v * (v - 1)
    }
  }

  return res
};