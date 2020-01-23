/**
 * 参考----时空性能好--map
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0) {
    return 0
  }
  var temp = new Map()
  var res = 0
  for (let i = 0; i < nums.length; i++) {
    if (!temp.has(nums[i])) {
      temp.set(nums[i], 1)
    } else {
      let n = temp.get(nums[i])
      temp.set(nums[i], n + 1)
    }
  }
  if (k === 0) {
    temp.forEach((v, k) => {
      v > 1 ? res++ : null
    })
    return res
  } else {
    temp.forEach((v, key) => {
      temp.has(k + key) ? res++ : null
    })
    return res
  }
}

findPairs([1, 1, 1, 2, 2], 1)
