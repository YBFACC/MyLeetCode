/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * 自己--对角线+翻转
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  if (matrix.length === 0) return []
  let res = [matrix[0][0]]
  let top_bottom = false
  let quene = [[0, 0]]
  let ways = [
    [0, 1],
    [1, 0]
  ]
  let row = matrix.length
  let col = matrix[0].length

  let all = new Set()
  all.add('0,0')
  while (quene.length > 0) {
    let size = quene.length
    let temp = []
    while (size > 0) {
      let curr = quene.shift()
      for (const way of ways) {
        let r = curr[0] + way[0]
        let c = curr[1] + way[1]
        if (r < 0 || r >= row || c < 0 || c >= col || all.has(`${r},${c}`)) {
          continue
        }
        quene.push([r, c])
        all.add(`${r},${c}`)
        temp.push(matrix[r][c])
      }
      size--
    }
    top_bottom ? res.push(...temp.reverse()) : res.push(...temp)
    top_bottom = !top_bottom
  }
  return res
}
// @lc code=end

findDiagonalOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])
