/**
 * 自己--暴力
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i === nums[i]) return i
  }
  return -1
}
