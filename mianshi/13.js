/**
 * 参考--各个位之和--bfs--set去重--性能好
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function func(i, j, k) {
  let num = 0
  if (i >= 10) {
    let arr = i.toString(10).split('')
    let I = arr.reduce((pre, curr) => {
      return pre + ~~curr
    }, 0)
    num += I
  } else {
    num += i
  }
  if (j >= 10) {
    let arr = j.toString(10).split('')
    let J = arr.reduce((pre, curr) => {
      return pre + ~~curr
    }, 0)
    num += J
  } else {
    num += j
  }
  return num <= k
}
var movingCount = function (m, n, k) {
  let list = [[0, 0]]
  let res = 1
  let set = new Set('0,0')
  while (list.length > 0) {
    let size = list.length
    while (size > 0) {
      size--
      let curr = list.shift()
      let ways = [
        [0, 1],
        [1, 0],
      ]
      for (let i = 0; i < 2; i++) {
        let row = curr[0] + ways[i][0],
          col = curr[1] + ways[i][1]
        if (
          row < 0 ||
          row >= m ||
          col < 0 ||
          col >= n ||
          set.has(`${row},${col}`)
        )
          continue
        if (func(row, col, k)) {
          list.push([row, col])
          set.add(`${row},${col}`)
          res++
        }
      }
    }
  }
  return res
}

movingCount(3, 2, 17)
