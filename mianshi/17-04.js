/**
 * 参考--异或优化空间
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  if (nums.length === 0) return 0

  let res = 0

  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i]
    res ^= i + 1
  }

  return res
}

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
