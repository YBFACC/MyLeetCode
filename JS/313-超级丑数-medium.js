/*
 * @lc app=leetcode.cn id=313 lang=javascript
 *
 * [313] 超级丑数
 */

// @lc code=start
/**
 * 参考--最小堆输出n次
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  let heap = new MaxHeap()
  let set = new Set()
  let res = []

  set.add(1)
  heap.insert(1)

  while (res.length <= n) {

    res.push(heap.extract())
    let temp = res[res.length - 1]

    for (const prime of primes) {

      let ans = prime * temp
      if (set.has(ans)) continue
      heap.insert(ans)
      set.add(ans)
    }
  }

  return res[n - 1]
}

class MaxHeap {
  constructor() {
    this.list = []
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
    let _return = this.list.pop()
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
    return _return
  }
}
function swap(list, i, j) {
  ;[list[i], list[j]] = [list[j], list[i]]
}

// @lc code=end

nthSuperUglyNumber(12, [2, 7, 13, 19])
