/**
 * 参考--归并排序--性能好
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  let res = 0
  func(nums)

  function func(nums) {
    let mid = Math.trunc(nums.length / 2)
    let left = nums.slice(0, mid)
    let right = nums.slice(mid)
    return merge(left, right)
  }
  function merge(left, right) {
    let temp = []
    let left_len = left.length
    let right_len = right.length
    let len = left_len + right_len
    for (let index = 0, i = 0, j = 0; index < len; index++) {
      if (i >= left_len) temp[index] = right[j++]
      else if (j > right_len) temp[index] = left[i++]
      else if (left[i] <= right[j]) temp[index] = left[i++]
      else {
        temp[index] = right[j++]
        res += left_len - i
      }
    }
  }
  return res
}

reversePairs([5, 3, 6, 1, 6, 9, 8, 9, 7, 4, 5, 6, 1, 0, 2, 5, 2])
