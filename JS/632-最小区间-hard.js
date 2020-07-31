/*
 * @lc app=leetcode.cn id=632 lang=javascript
 *
 * [632] 最小区间
 */

// @lc code=start
/**
 * 参考--遍历所有数预处理--双指针
 * 预处理得到=>[num,来自于第k列]
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  const k = nums.length
  const all = []
  for (let i = 0; i < nums.length; i++) {
    const temp = nums[i]
    for (const num of temp) {
      all.push([num, i])
    }
  }
  all.sort((a, b) => a[0] - b[0])

  let res = [all[0][0], all[all.length - 1][0]]

  let left = 0
  let right = 0
  let map = new Map()
  let count = 0
  while (right < all.length) {
    const _r = all[right]
    if (map.has(_r[1]) && map.get(_r[1]) > 0) {
      map.set(_r[1], map.get(_r[1]) + 1)
    } else {
      map.set(_r[1], 1)
      count++
    }
    while (count === k) {
      if (res[1] - res[0] > all[right][0] - all[left][0]) {
        res = [all[left][0], all[right][0]]
      }
      map.set(all[left][1], map.get(all[left][1]) - 1)
      if (map.get(all[left][1]) === 0) {
        count--
      }
      left++
    }
    right++
  }

  return res
}

// @lc code=end
smallestRange([
  [4, 10, 15, 24, 26],
  [0, 9, 12, 20],
  [5, 18, 22, 30]
])
