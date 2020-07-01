/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第K小的元素
 */

// @lc code=start
/**
 * 自己--最大堆--没有利用升序这个条件
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let heap = new MaxHeap(k)
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      heap.insert(matrix[i][j])
    }
  }
  return heap.list[0]
}

class MaxHeap {
  constructor(k) {
    this.k = k
    this.list = []
  }
  insert(num) {
    if (this.list.length + 1 > this.k) {
      if (num >= this.list[0]) {
        return
      }
      this.extract()
    }
    this.list.push(num)
    let index = this.list.length - 1
    while (index) {
      let parent = Math.floor((index - 1) / 2)
      if (this.list[parent] >= this.list[index]) {
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
      if (right < length && this.list[right] > this.list[child]) {
        child = right
      }
      if (this.list[child] <= this.list[index]) {
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

kthSmallest(
  [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15]
  ],
  8
)
