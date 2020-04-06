/**
 * 自己--秒杀
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map()
  for (const item of nums) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1)
  }
  for (const [k, v] of map) {
    if (v > nums.length / 2) {
      return k
    }
  }
  return -1
}
majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2])
