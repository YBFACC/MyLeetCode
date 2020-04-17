/**
 * 自己--参考以前等二分法--性能好
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  let min, max//target值出现等下标max和min
  const func = function (left, right) {
    if (left > right) return
    let mid = ((right - left) >> 1) + left
    if (nums[mid] === target) {
      min = min === undefined ? mid : Math.min(mid, min)
      max = max === undefined ? mid : Math.max(mid, max)
    }
    func(left, mid - 1)
    func(mid + 1, right)
  }
  func(left, right)
  if (max === undefined) {
    return 0
  }
  return max - min + 1
}
