/**
 * 参考--贪心
 * 默认使用--峰-谷-峰
 * 峰的位置--前一个值不能大于峰
 * 谷的位置--前一个值不能小于谷
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      nums[i] < nums[i - 1] ? swap(nums, i, i - 1) : null
    } else {
      nums[i] > nums[i - 1] ? swap(nums, i, i - 1) : null
    }
  }
}

function swap(list, i, j) {
  ;[list[i], list[j]] = [list[j], list[i]]
}

let a = [1, 2, 3]
wiggleSort(a)

console.log()
