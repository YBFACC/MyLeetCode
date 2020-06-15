/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * 自己--sort字典排序
 * 也可以 a+b--b+a
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  if (nums.length === 0) return ''

  let res = 0
  for (let i = 0; i < nums.length; i++) {
    res += nums[i]
    if (res !== 0) break
  }
  if (res === 0) return '0'

  nums.sort((a, b) => {
    let aS = a + '' + a
    let bS = b + '' + a
    let aLen = 0
    let bLen = 0
    while (aLen < aS.length || bLen < bS.length) {
      let temp_a = aLen < aS.length ? aLen : 0
      let temp_b = bLen < bS.length ? bLen : 0
      if (aS[temp_a] > bS[temp_b]) {
        return -1
      } else if (aS[temp_a] < bS[temp_b]) {
        return 1
      }
      aLen++
      bLen++
    }
    return 0
  })
  return nums.join('')
}
// @lc code=end

largestNumber([824, 938, 1399, 5607, 6973, 5703, 9609, 4398, 8247])

