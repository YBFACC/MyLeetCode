/**
 * 参考--异或--划分为2个数组
 * 遍历一遍nums，遍历一般N
 * 转化为2个数字出现1次，其他数字出现2次
 * @param {number[]} nums
 * @return {number[]}
 */
var missingTwo = function (nums) {
  const N = nums.length + 2
  let temp = 0
  for (let i = 0; i < nums.length; i++) {
    temp ^= nums[i]
  }
  for (let i = 1; i <= N; i++) {
    temp ^= i
  }
  let x = 0
  let y = 0
  let count = 0
  while ((temp & 1) === 0) {
    temp >>>= 1
    count++
  }
  for (let i = 0; i < nums.length; i++) {
    if (((nums[i] >>> count) & 1) === 1) {
      x ^= nums[i]
    } else {
      y ^= nums[i]
    }
  }
  for (let i = 1; i <= N; i++) {
    if (((i >>> count) & 1) === 1) {
      x ^= i
    } else {
      y ^= i
    }
  }
  return [x, y]
}

console.log(missingTwo([2]))
