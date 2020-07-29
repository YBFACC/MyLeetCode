/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * 自己--easy
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  if (arr1.length === 0) return []
  let map = new Map()
  for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], map.has(arr1[i]) ? map.get(arr1[i]) + 1 : 1)
  }
  let res = []
  for (let i = 0; i < arr2.length; i++) {
    let index = map.get(arr2[i])
    map.delete(arr2[i])
    while (index > 0) {
      res.push(arr2[i])
      index--
    }
  }

  let temp = []
  map.forEach((v, k) => {
    let index = v
    while (index > 0) {
      temp.push(k)
      index--
    }
  })
  temp.sort((a, b) => a - b)
  return [...res, ...temp]
}
// @lc code=end

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
)
