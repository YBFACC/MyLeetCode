/**
 * 自己--秒杀
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  let set = new Set()
  for (const item of nums) {
    if (!set.has(item)) {
      set.add(item)
    } else {
      return item
    }
  }
  return null
}
