/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * 自己--参考螺旋矩阵1--性能好
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (n === 1) return [[1]]
  let list = Array.from({ length: n }, ($) =>
    Array.from({ length: n }, ($) => 0)
  )
  let num = 1
  let all = n ** 2
  function goRight(now) {
    for (let j = now; j <= n - 1 - now; j++) {
      if (num > all) {
        return
      }
      list[now][j] = num
      num++
    }
  }
  function goDown(now) {
    for (let j = now + 1; j < n - 1 - now; j++) {
      if (num > all) {
        return
      }
      list[j][n - 1 - now] = num
      num++
    }
  }
  function goLeft(now) {
    for (let j = n - 1 - now; j > now; j--) {
      if (num > all) {
        return
      }
      list[n - 1 - now][j] = num
      num++
    }
  }
  function goUp(now) {
    for (let j = n - 1 - now; j > now; j--) {
      if (num > all) {
        return
      }
      list[j][now] = num
      num++
    }
  }
  let now = 0
  while (num <= n ** 2) {
    goRight(now)
    goDown(now)
    goLeft(now)
    goUp(now)
    now++
  }
  return list
}
// @lc code=end

generateMatrix(2)
