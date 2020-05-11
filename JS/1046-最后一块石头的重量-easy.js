/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * 自己--大顶堆
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let heap = new MaxHeap(stones)

  while (heap.list.length > 1) {
    let one = heap.extract()//取出最大值
    let two = heap.extract()//取出最大值
    let temp = Math.abs(one - two)
    if (temp > 0) {
      heap.insert(temp)//将剩余插回堆
    }
  }

  return heap.list.length > 0 ? heap.list[0] : 0
}

class MaxHeap {
  constructor(nums) {
    this.list = []
    nums.forEach(this.insert.bind(this))
  }
  insert(num) {
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
    let max_num = this.list.pop()
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
    return max_num
  }
}
function swap(list, i, j) {
  ;[list[i], list[j]] = [list[j], list[i]]
}
// @lc code=end


