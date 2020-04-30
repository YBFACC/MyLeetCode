/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第K大元素
 */

// @lc code=start
/**
 * 参考--最小堆-找第k大大元素
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.size = k
  this.list = []
  for (const num of nums) {
    if (this.list.length < this.size) {
      this.insert(num)
    } else {
      if (this.list[0] <= num) {
        this.extract()
        this.insert(num)
      }
    }
  }
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.list.length < this.size) {
    this.insert(val)
  } else {
    if (this.list[0] <= val) {
      this.extract()
      this.insert(val)
    }
  }
  return this.list[0]
}

KthLargest.prototype.extract = function () {
  if (this.list.length <= 0) return null
  swap(this.list, 0, this.list.length - 1)
  this.list.pop()
  const length = this.list.length
  let index = 0
  let left = index * 2 + 1
  while (left < length) {
    let right = index * 2 + 2
    if (right < length && this.list[right] < this.list[left]) {
      left = right
    }
    if (this.list[left] > this.list[index]) {
      break
    }
    swap(this.list, left, index)
    index = left
    left = index * 2 + 1
  }
}

KthLargest.prototype.insert = function (num) {
  this.list.push(num)
  let index = this.list.length - 1
  while (index > 0) {
    let parent = Math.floor((index - 1) / 2)
    if (this.list[index] > this.list[parent]) {
      break
    }
    swap(this.list, index, parent)
    index = parent
  }
  return
}
function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

// @lc code=end

var obj = new KthLargest(3, [4, 5, 8, 2])
var param_1 = obj.add(3)
var param_2 = obj.add(5)
var param_3 = obj.add(10)
var param_4 = obj.add(9)
var param_5 = obj.add(4)
