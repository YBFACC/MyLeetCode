/**
 * 自己--参考53-i-二分法--性能一般
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let left = 0
  let right = nums.length - 1
  let res
  const func = function (left, right) {
    if (left - right === 1) {
      res = left
      return
    }
    let mid = ((right - left) >> 1) + left
    if (nums[mid] === mid) {
      func(mid + 1, right)
    } else {
      func(left, mid - 1)
    }
  }
  func(left, right)

  return res
}

missingNumber([0, 1, 3])
