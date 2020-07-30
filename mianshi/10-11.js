/**
 * 参考--排序后+在首尾交换
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  nums.sort((a, b) => a - b)
  let temp = nums.slice()
  let left = 0
  let right = nums.length - 1
  let index = 0
  while (left < right) {
    nums[index++] = temp[right--]
    nums[index++] = temp[left++]
  }
  if (nums.length % 2 === 1) {
    nums[index] = temp[left]
  }
}

let a = [1, 2,3]
wiggleSort(a)

console.log()
