
/**
 * copy--模拟
 * @param x 
 * @param y 
 * @param points 
 * @returns 
 */
var nearestValidPoint = function (x: number, y: number, points: number[][]) {
  const n = points.length;
  let best = Number.MAX_VALUE, bestid = -1;
  for (let i = 0; i < n; ++i) {
    const px = points[i][0], py = points[i][1];
    if (x === px) {
      const dist = Math.abs(y - py);
      if (dist < best) {
        best = dist;
        bestid = i;
      }
    } else if (y === py) {
      const dist = Math.abs(x - px);
      if (dist < best) {
        best = dist;
        bestid = i;
      }
    }
  }
  return bestid;
};

nearestValidPoint(3, 4, [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]])