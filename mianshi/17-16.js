/**
 * 自己--dp--性能一般
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
  if (nums.length === 0) return []
  if (nums.length < 2)
    return (nums[0] || 0) > (nums[1] || 0) ? (nums[0] || 0) : (nums[1] || 0)

  let current = nums[0]
  let next = nums[1]

  for (let i = 2; i < nums.length; i++) {
    let temp = next
    next = current + nums[i]
    current = Math.max(current, temp)
  }
  return Math.max(current, next)
}
console.log(massage([1, 2, 3, 1]))
