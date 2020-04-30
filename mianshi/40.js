/**
 * 自己重新写大顶堆
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  const length = arr.length
  if (k >= length) {
    return arr
  }
  const heap = new MaxHeap(arr.slice(0, k))
  for (let i = k; i < length; ++i) {
    if (heap.top() > arr[i]) {
      heap.extract()
      heap.insert(arr[i])
    }
  }
  return heap.container
}

class MaxHeap {
  constructor(arr = []) {
    this.container = []
    if (Array.isArray(arr)) {
      arr.forEach(this.insert.bind(this))
    }
  }

  insert(data) {
    const { container } = this

    container.push(data)
    let index = container.length - 1
    while (index) {
      let parent = Math.floor((index - 1) / 2)
      if (container[index] <= container[parent]) {
        break
      }
      swap(container, index, parent)
      index = parent
    }
  }

  extract() {
    const { container } = this
    if (!container.length) {
      return null
    }

    swap(container, 0, container.length - 1)
    const res = container.pop()
    const length = container.length
    let index = 0,
      exchange = index * 2 + 1

    while (exchange < length) {
      // 如果有右节点，并且右节点的值大于左节点的值
      let right = index * 2 + 2
      if (right < length && container[right] > container[exchange]) {
        exchange = right
      }
      if (container[exchange] <= container[index]) {
        break
      }
      swap(container, exchange, index)
      index = exchange
      exchange = index * 2 + 1
    }

    return res
  }

  top() {
    if (this.container.length) return this.container[0]
    return null
  }
}

function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}
