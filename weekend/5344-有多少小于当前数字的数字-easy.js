/**
 * 自己--178周赛
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  if (nums.length === 0) return []
  let map = new Map()
  nums.forEach(e => {
    map.set(e, map.has(e) ? map.get(e) + 1 : 1)
  })
  let res = []
  for (let i = 0; i < nums.length; i++) {
    let count = 0
    map.forEach((v, k) => {
      if (nums[i] > k) {
        count += v
      }
    })
    res.push(count)
  }
  return res
}
smallerNumbersThanCurrent([7, 7, 7, 7])
