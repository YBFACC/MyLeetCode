/*
 * @lc app=leetcode.cn id=684 lang=javascript
 *
 * [684] 冗余连接
 */

// @lc code=start
/**
 * 参考--查并集
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const n = edges.length
  const obj = {}
  for (let i = 1; i <= n; i++) {
    obj[i] = i
  }
  for (const edge of edges) {
    if (find(edge[0]) === find(edge[1])) {
      return edge
    } else {
      union(edge[0], edge[1])
    }
  }
  function find(edge) {
    while (edge !== obj[edge]) {
      edge = obj[edge]
    }
    return edge
  }

  function union(edge1, edge2) {
    const p1 = find(edge1)
    const p2 = find(edge2)
    if (p1 < p2) {
      obj[p2] = p1
    } else {
      obj[p1] = p2
    }
  }
  return []
}

// @lc code=end

console.log(
  findRedundantConnection([
    [1, 2],
    [1, 3],
    [2, 3]
  ])
)
