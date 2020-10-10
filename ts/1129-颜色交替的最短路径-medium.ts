/*
 * @lc app=leetcode.cn id=1129 lang=typescript
 *
 * [1129] 颜色交替的最短路径
 */

// @lc code=start
//参考--交替-DFS
function shortestAlternatingPaths(n: number, red_edges: number[][], blue_edges: number[][]): number[] {
  const Len = n
  const Redgraph = Array.from({ length: Len }, () =>
    Array.from({ length: Len }, () => 0))
  const Bluegraph = Array.from({ length: Len }, () =>
    Array.from({ length: Len }, () => 0))

  red_edges.forEach((v, i) => Redgraph[v[0]][v[1]] = 1)
  blue_edges.forEach((v, i) => Bluegraph[v[0]][v[1]] = 1)
  let red = new Array(n).fill(1000)
  let blue = new Array(n).fill(1000)
  red[0] = 0
  blue[0] = 0
  let redPoints = [0];
  let bluePoints = [0];

  while (redPoints.length || bluePoints.length) {
    const tempBluePoints: number[] = []
    const tempRedPoints: number[] = []
    if (redPoints.length) {
      redPoints.forEach(point => {
        Bluegraph[point].forEach((v, to) => {
          if (v > 0 && blue[to] > red[point] + 1) {
            blue[to] = red[point] + 1
            tempBluePoints.push(to)
          }
        })
      })
    }
    if (bluePoints.length) {
      bluePoints.forEach(point => {
        Redgraph[point].forEach((v, to) => {
          if (v > 0 && red[to] > blue[point] + 1) {
            red[to] = blue[point] + 1
            tempRedPoints.push(to)
          }
        })
      })
    }
    redPoints = tempRedPoints
    bluePoints = tempBluePoints
  }
  return blue.map((el, i) => {
    let res = Math.min(el, red[i]);
    return res <= 999 ? res : -1
  })
};
// @lc code=end

console.log(shortestAlternatingPaths(3, [[0, 1], [1, 2]], []))