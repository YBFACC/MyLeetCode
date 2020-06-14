/*
 * @lc app=leetcode.cn id=1300 lang=javascript
 *
 * [1300] 转变数组后最接近目标值的数组和
 */

// @lc code=start
/**
 * 自己--二分
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
  let map = new Map()
  let res = Infinity
  let min = Infinity

  let arr_max = 0

  for (const item of arr) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1)
    arr_max = Math.max(arr_max, item)
  }

  let left = 0
  let right = arr_max

  while (left <= right) {
    let mid = (left + right) >> 1

    let count = 0
    map.forEach((v, k) => {
      if (k >= mid) count += mid * v
      else count += k * v
    })
    let temp = Math.abs(target - count)

    if (temp === min) {
      res = Math.min(mid, res)
    } else if (temp < min) {
      res = mid
      min = temp
    }

    if (target - count > 0) {
      left = mid + 1
    } else if (target - count < 0) {
      right = mid - 1
    } else {
      break
    }
  }
  return res
}
// @lc code=end

findBestValue([4, 9, 3], 10)
