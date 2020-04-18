/**
 * 自己--从尾bfs
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
  n = n - 1
  let bfs = []
  for (let i = 0; i < relation.length; i++) {
    if (relation[i][1] === n) {
      bfs.push(relation[i])
    }
  }

  while (k > 1) {
    let size = bfs.length
    while (size > 0) {
      let curr = bfs.shift()
      relation.forEach((item) => {
        if (item[1] === curr[0]) {
          bfs.push([item[0], ...curr])
        }
      })
      size--
    }
    k--
  }
  let res = 0
  bfs.forEach((item) => {
    if (item[0] === 0) {
      res++
    }
  })
  return res
}
numWays(
  3,
  [
    [0, 2],
    [2, 1],
  ],
  2
)
