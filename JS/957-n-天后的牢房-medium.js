/*
 * @lc app=leetcode.cn id=957 lang=javascript
 *
 * [957] N 天后的牢房
 */

// @lc code=start
/**
 * 自己--找到最小循环节
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, N) {
  let list = [cells]
  let first_line = ''
  for (let i = 1; i <= N; i++) {
    if (i === 2) {
      first_line = list[1].join('')
    } else {
      if (first_line === list[list.length - 1].join('')) {
        break
      }
    }
    let curr = Array.from({ length: 8 }, $ => 0)
    let pro = list[i - 1]
    for (let j = 1; j < 8; j++) {
      curr[j] = pro[j - 1] === pro[j + 1] ? 1 : 0
    }
    list.push(curr)
  }

  if (N === list.length - 1) {
    return list[list.length - 1]
  } else {
    list.shift()
    list.pop()
    N = (N % list.length) - 1
    return N < 0 ? list[list.length - 1] : list[N]//如果是-1就是上一个循环节最后一项
  }
}
// @lc code=end

console.log(prisonAfterNDays([0, 0, 0, 1, 1, 0, 1, 0], 574))
