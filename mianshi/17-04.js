/**
 * 自己--还可以空间优化
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  if (nums.length === 0) return 0
  const list = Array.from({ length: nums.length + 1 }, () => false)
  for (let i = 0; i < nums.length; i++) {
    list[nums[i]] = true
  }
  for (let i = 0; i < list.length; i++) {
    if (!list[i]) return i
  }
  return 0
}

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
