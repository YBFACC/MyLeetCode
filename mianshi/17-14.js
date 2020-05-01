/**
 * 自己--大顶堆--性能可以
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function (arr, k) {
  if (arr.length <= k) return arr
  let heap = new MaxHeap(k, arr.slice(0, k))
  for (let i = k; i < arr.length; i++) {
    if (heap.list[0] > arr[i]) {
      heap.extract()
      heap.insert(arr[i])
    }
  }
  return heap.list
}

class MaxHeap {
  constructor(k, arr) {
    this.list = []
    this.k = k
    arr.forEach(item => this.insert(item))
  }
}

MaxHeap.prototype.insert = function (num) {
  this.list.push(num)
  let length = this.list.length - 1
  while (length) {
    let parent = Math.floor((length - 1) / 2)
    if (this.list[length] <= this.list[parent]) {
      break
    }
    swap(this.list, length, parent)
    length = parent
  }
}

function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}
MaxHeap.prototype.extract = function () {
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

smallestK([1, 3, 5, 7, 2, 4, 6, 8], 4)
