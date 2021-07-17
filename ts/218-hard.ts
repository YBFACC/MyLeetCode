/*
 * @lc app=leetcode.cn id=218 lang=typescript
 *
 * [218] 天际线问题
 */

class Heap<T> {
  private container: T[]
  protected compare: Function
  constructor(arr: T[] = [], fn?: Function) {
    this.container = []
    if (fn) {
      this.compare = fn
    } else {
      this.compare = (v1: T, v2: T): boolean => {
        //>= 小顶堆
        return v1 >= v2
      }
    }

    if (Array.isArray(arr)) {
      arr.forEach(this.insert.bind(this))
    }

  }

  insert(data: T) {
    const { container } = this

    container.push(data)
    let index = container.length - 1
    while (index) {
      let parent = Math.floor((index - 1) / 2)
      if (this.compare(container[index], container[parent])) {
        break
      }
      this.swap(container, index, parent)
      index = parent
    }
  }

  extract(): T | null {
    const { container } = this
    if (!container.length) {
      return null
    }

    this.swap(container, 0, container.length - 1)
    const res = container.pop() as T
    const length = container.length
    let index = 0,
      exchange = index * 2 + 1

    while (exchange < length) {
      let right = index * 2 + 2
      if (right < length && this.compare(container[exchange], container[right])) {
        exchange = right
      }
      if (this.compare(container[exchange], container[index])) {
        break
      }
      this.swap(container, exchange, index)
      index = exchange
      exchange = index * 2 + 1
    }
    return res
  }

  remove(val: T): boolean {
    const { container } = this
    let index = container.indexOf(val)
    if (index !== -1) {
      this.removeAt(index)
      return true
    }
    return false
  }
  removeAt(i: number): void {
    const { container } = this
    this.swap(container, i, container.length - 1)
    container.pop()
    const length = container.length
    let index = i,
      exchange = index * 2 + 1

    while (exchange < length) {
      let right = index * 2 + 2
      if (right < length && this.compare(container[exchange], container[right])) {
        exchange = right
      }
      if (this.compare(container[exchange], container[index])) {
        break
      }
      this.swap(container, exchange, index)
      index = exchange
      exchange = index * 2 + 1
    }
  }

  private swap(arr: T[], i: number, j: number): void {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  isEmpty(): boolean {
    return this.container.length === 0
  }
  topValue(): T {
    return this.container[0]
  }
  get length(): number {
    return this.container.length
  }
}

//参考--优先队列


// @lc code=start
function getSkyline(buildings: number[][]): number[][] {
  const res = []
  const temp = []
  for (const [left, right, height] of buildings) {
    temp.push([left, -height])
    temp.push([right, height])
  }
  temp.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0]
    return a[1] - b[1]
  })

  const maxHeap = new Heap<number>([], (a: number, b: number) => a <= b)
  let pre = 0
  maxHeap.insert(pre)
  for (const p of temp) {
    const point = p[0], height = p[1]
    if (height < 0) {
      maxHeap.insert(-height)
    } else {
      maxHeap.remove(height)
    }
    let cur = maxHeap.topValue()
    if (cur !== pre) {
      res.push([point, cur])
      pre = cur
    }
  }
  return res
};
// @lc code=end

getSkyline([[1, 2, 1], [1, 2, 2], [1, 2, 3], [2, 3, 1], [2, 3, 2], [2, 3, 3]])

getSkyline([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]])