/*
 * @lc app=leetcode.cn id=621 lang=typescript
 *
 * [621] 任务调度器
 */

// @lc code=start
//参考--大顶堆
function leastInterval(tasks: string[], n: number): number {
  const map = new Map()
  let res = 0

  for (const task of tasks) {
    map.set(task, map.has(task) ? map.get(task) + 1 : 1)
  }
  const heap = new maxHeap()
  for (const val of map.values()) {
    heap.insert(val)
  }

  while (!heap.empty()) {
    const temp = []
    let count = 0
    for (let i = 0; i <= n; i++) {
      const num = heap.extract()
      if (!isNaN(num)) {
        count++
        (num - 1 > 0) && temp.push(num - 1)
      }
    }
    temp.forEach(v => heap.insert(v))
    if (heap.empty()) {
      res += count
    } else {
      res += n + 1
    }
  }

  return res
};


function swap(arr: number[], i: number, j: number): void {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

class maxHeap {
  container: number[]
  constructor(arr = []) {
    this.container = []
    if (Array.isArray(arr)) {
      arr.forEach(this.insert.bind(this))
    }
  }

  insert(data: number): void {
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

  extract(): number {
    const { container } = this
    if (!container.length) {
      return NaN
    }

    swap(container, 0, container.length - 1)
    const res = container.pop() as number
    const length = container.length
    let index = 0,
      exchange = index * 2 + 1

    while (exchange < length) {
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
  empty(): boolean {
    return this.container.length === 0
  }
}
// @lc code=end
//16
leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2)
leastInterval(["A", "A", "A", "B", "B", "B"], 2)



//6
leastInterval(["A", "A", "A", "B", "B", "B"], 0)