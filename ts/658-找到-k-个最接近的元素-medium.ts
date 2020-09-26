/*
 * @lc app=leetcode.cn id=658 lang=typescript
 *
 * [658] 找到 K 个最接近的元素
 */
//自己--堆
// @lc code=start
function findClosestElements(arr: number[], k: number, x: number): number[] {

  const Len = arr.length
  const heap = new MinHeap()
  //[val,index]
  for (let i = 0; i < Len; i++) {
    const item = arr[i]
    const abs = Math.abs(item - x)
    heap.insert([abs, i])
  }
  const res = []
  while (k-- > 0) {
    const item = heap.extract()[1] as number
    res.push(arr[item])
  }

  return res.sort((a, b) => a - b)
};

interface heap_item {
  [index: number]: number
}

function swap(arr: heap_item[], i: number, j: number): void {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

function compare(v1: heap_item, v2: heap_item): boolean {
  if (v1[0] === v2[0]) {
    return v1[1] > v2[1]
  } else {
    return v1[0] > v2[0]
  }
}

class MinHeap {
  container: heap_item[]
  constructor(arr = []) {
    this.container = []
    if (Array.isArray(arr)) {
      arr.forEach(this.insert.bind(this))
    }
  }

  insert(data: heap_item) {
    const { container } = this

    container.push(data)
    let index = container.length - 1
    while (index) {
      let parent = Math.floor((index - 1) / 2)
      if (compare(container[index], container[parent])) {
        break
      }
      swap(container, index, parent)
      index = parent
    }
  }

  extract(): heap_item {
    const { container } = this
    if (!container.length) {
      return []
    }

    swap(container, 0, container.length - 1)
    const res = container.pop() as heap_item
    const length = container.length
    let index = 0,
      exchange = index * 2 + 1

    while (exchange < length) {
      let right = index * 2 + 2
      if (right < length && compare(container[exchange], container[right])) {
        exchange = right
      }
      if (compare(container[exchange], container[index])) {
        break
      }
      swap(container, exchange, index)
      index = exchange
      exchange = index * 2 + 1
    }

    return res
  }
}
// @lc code=end

findClosestElements([1, 2, 3, 4, 5], 4, -1)