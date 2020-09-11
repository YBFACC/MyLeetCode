import { runScript } from "leetcode-class";

//参考--map取值-map记录频率--双向链表O(1)删除
class linkedTwo {
  pre: linkedTwo | undefined
  next: linkedTwo | undefined
  key: number
  val: number
  times: number
  constructor(key: number, val: number) {
    this.key = key
    this.val = val
    this.pre
    this.next
    this.times = 1
  }
}

class LFUCache {
  getLinked: Map<number, linkedTwo>
  time: Map<number, LFUitem>
  max: number
  cache_num: number
  minFreq: number
  constructor(capacity: number) {
    this.max = capacity
    this.time = new Map()
    this.getLinked = new Map()
    this.cache_num = 0
    this.minFreq = 1
  }

  get(key: number): number {
    if (this.getLinked.has(key)) {
      const linked = this.getLinked.get(key) as linkedTwo
      this.change(linked)
      return linked.val
    }
    return -1
  }

  put(key: number, value: number): void {
    const time = this.time
    if (this.getLinked.has(key)) {
      const linked = this.getLinked.get(key) as linkedTwo
      linked.val = value
      this.change(linked)
    } else {
      if (this.cache_num >= this.max && this.max >= 1) {
        let item = time.get(this.minFreq) as LFUitem
        const temp = item.delete_Tail()
        this.updata_minFreq(item, this.minFreq)
        this.getLinked.delete(temp)
        this.cache_num--
      }
      if (this.cache_num < this.max) {
        this.getLinked.set(key, this.insert(key, value))
        this.cache_num++
      }

    }

  }
  change(linked: linkedTwo): void {
    const time = this.time
    this.delete(linked)
    linked.times++
    this.add_time(linked)
    this.updata_minFreq(time.get(linked.times - 1) as LFUitem, linked.times - 1)
  }
  insert(key: number, value: number): linkedTwo {
    const target = new linkedTwo(key, value)
    this.minFreq = 1
    this.add_time(target)
    return target
  }
  add_time(linked: linkedTwo): void {
    const time = this.time
    const index = linked.times
    if (!time.has(index)) {
      time.set(index, new LFUitem())
    }
    const item = time.get(index) as LFUitem
    item.insert(linked)
  }
  updata_minFreq(item: LFUitem | undefined, index: number): void {
    if (!item) return
    const time = this.time
    if (item.nothing()) {
      time.delete(index)
      if (time.size === 0) {
        this.minFreq = 1
        return
      }
      while (!time.has(this.minFreq)) {
        this.minFreq++
      }
    }
  }
  delete(linked: linkedTwo): void {
    const pre = linked.pre as linkedTwo
    const next = linked.next as linkedTwo
    pre.next = next
    next.pre = pre
  }
}

class LFUitem {
  tump: linkedTwo
  tail: linkedTwo
  constructor() {
    this.tump = new linkedTwo(NaN, NaN)
    this.tail = new linkedTwo(NaN, NaN)
    this.tump.next = this.tail
    this.tail.pre = this.tump
  }
  insert(linked: linkedTwo): void {
    const temp = this.tump.next as linkedTwo
    linked.pre = this.tump
    this.tump.next = linked
    linked.next = temp
    temp.pre = linked
  }
  delete_Tail(): number {
    const target = this.tail.pre as linkedTwo
    const pre = target.pre as linkedTwo
    pre.next = this.tail
    this.tail.pre = pre
    return target.key
  }
  nothing(): boolean {
    const tump = this.tump
    const tail = this.tail
    if (tump.next === tail) {
      return true
    }
    return false
  }
}

runScript(["LFUCache", "put", "put", "put", "put", "put", "get", "put", "get", "get", "put", "get", "put", "put", "put", "get", "put", "get", "get", "get", "get", "put", "put", "get", "get", "get", "put", "put", "get", "put", "get", "put", "get", "get", "get", "put", "put", "put", "get", "put", "get", "get", "put", "put", "get", "put", "put", "put", "put", "get", "put", "put", "get", "put", "put", "get", "put", "put", "put", "put", "put", "get", "put", "put", "get", "put", "get", "get", "get", "put", "get", "get", "put", "put", "put", "put", "get", "put", "put", "put", "put", "get", "get", "get", "put", "put", "put", "get", "put", "put", "put", "get", "put", "put", "put", "get", "get", "get", "put", "put", "put", "put", "get", "put", "put", "put", "put", "put", "put", "put"]
  , [[10], [10, 13], [3, 17], [6, 11], [10, 5], [9, 10], [13], [2, 19], [2], [3], [5, 25], [8], [9, 22], [5, 5], [1, 30], [11], [9, 12], [7], [5], [8], [9], [4, 30], [9, 3], [9], [10], [10], [6, 14], [3, 1], [3], [10, 11], [8], [2, 14], [1], [5], [4], [11, 4], [12, 24], [5, 18], [13], [7, 23], [8], [12], [3, 27], [2, 12], [5], [2, 9], [13, 4], [8, 18], [1, 7], [6], [9, 29], [8, 21], [5], [6, 30], [1, 12], [10], [4, 15], [7, 22], [11, 26], [8, 17], [9, 29], [5], [3, 4], [11, 30], [12], [4, 29], [3], [9], [6], [3, 4], [1], [10], [3, 29], [10, 28], [1, 20], [11, 13], [3], [3, 12], [3, 8], [10, 9], [3, 26], [8], [7], [5], [13, 17], [2, 27], [11, 15], [12], [9, 19], [2, 15], [3, 16], [1], [12, 17], [9, 1], [6, 19], [4], [5], [5], [8, 1], [11, 7], [5, 2], [9, 28], [1], [2, 2], [7, 4], [4, 22], [7, 24], [9, 26], [13, 28], [11, 26]], [LFUCache])

let res = runScript(["LFUCache", "put", "get", "put", "get", "get"]
  , [[1], [2, 1], [2], [3, 2], [2], [3]], [LFUCache])

runScript(["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
  , [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]], [LFUCache])

runScript(["LFUCache", "put", "get"],
  [[1], [0, 0], [0]], [LFUCache])

runScript(["LFUCache", "put", "get"],
  [[0], [0, 0], [0]], [LFUCache])