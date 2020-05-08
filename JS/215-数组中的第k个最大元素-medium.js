/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * 自己--手写小顶堆
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  if (nums.length < 2) return nums
  let heap = new MaxHeap(nums.slice(0, k), k)
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > heap.list[0]) {
      heap.extract()
      heap.insert(nums[i])
    }
  }
  return heap.list[0]
}
class MaxHeap {
  constructor(nums, k) {
    this.k = k
    this.list = []
    nums.forEach(this.insert.bind(this))
  }
  insert(num) {
    this.list.push(num)
    let index = this.list.length - 1
    while (index) {
      let parent = Math.floor((index - 1) / 2)
      if (this.list[parent] <= this.list[index]) {
        break
      }
      swap(this.list, index, parent)
      index = parent
    }
  }
  extract() {
    swap(this.list, 0, this.list.length - 1)
    this.list.pop()
    let length = this.list.length
    let index = 0
    let child = index * 2 + 1
    while (child < length) {
      let right = index * 2 + 2
      if (right < length && this.list[right] < this.list[child]) {
        child = right
      }
      if (this.list[child] >= this.list[index]) {
        break
      }
      swap(this.list, child, index)
      index = child
      child = index * 2 + 1
    }
  }
}
function swap(list, i, j) {
  ;[list[i], list[j]] = [list[j], list[i]]
}
// @lc code=end

findKthLargest([3, 2, 1, 5, 6, 4], 2)


/**
 * 参考--增加快排解法--性能差
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let left = []
  let right = []
  let base = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > base) {
      right.push(nums[i])
    } else {
      left.push(nums[i])
    }
  }
  if (right.length === k - 1) {
    return base
  } else if (right.length >= k) {
    return findKthLargest(right, k)
  } else {
    return findKthLargest(left, k - right.length-1)
  }
}