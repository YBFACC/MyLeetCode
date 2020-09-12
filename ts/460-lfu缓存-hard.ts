import { runScript } from "leetcode-class";

//参考--二维双向链表
class linked_list {
  tump: linked_item
  tail: linked_item
  constructor(frequent: frequentItem) {
    this.tump = new linked_item(NaN, NaN, frequent)
    this.tail = new linked_item(NaN, NaN, frequent)
    this.tump.next = this.tail
    this.tail.pre = this.tump
  }
  insert_tump(linked: linked_item): void {
    const temp = this.tump.next as linked_item
    linked.pre = this.tump
    this.tump.next = linked
    linked.next = temp
    temp.pre = linked
  }
  delete_Tail(): number {
    const target = this.tail.pre as linked_item
    const pre = target.pre as linked_item
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
class linked_item {
  pre: linked_item | undefined
  next: linked_item | undefined
  key: number
  val: number
  frequent: frequentItem | undefined
  constructor(key: number, val: number, frequent?: frequentItem) {
    this.key = key
    this.val = val
    this.pre
    this.next
    this.frequent = frequent
  }
  delete(): void {
    const pre = this.pre as linked_item
    const next = this.next as linked_item
    pre.next = next
    next.pre = pre
  }
}

class frequent_list {
  start: frequentItem
  end: frequentItem
  constructor() {
    this.start = new frequentItem(NaN)
    this.end = new frequentItem(NaN)
    this.start.next = this.end
    this.end.pre = this.start
  }
  insert(linked: linked_item) {
    if (this.start?.next?.key !== 1) {
      this.start.add_frequentItem(1)
    }
    const one = this.start.next as frequentItem
    linked.frequent = one
    one.item.insert_tump(linked)
  }
  delete(): number {
    const target = this.start.next as frequentItem
    if (target.key === NaN) return -1
    const key = target.item.delete_Tail()
    target.delete_frequentItem()
    return key
  }
}

class frequentItem {
  pre: frequentItem | undefined
  next: frequentItem | undefined
  item: linked_list
  key: number
  constructor(key: number) {
    this.pre
    this.next
    this.item = new linked_list(this)
    this.key = key
  }
  next_item(linked: linked_item) {
    if (this.next?.key !== this.key + 1) {
      this.add_frequentItem(this.key + 1)
    }
    const next_linked_list = this.next?.item!
    linked.frequent = this.next!
    next_linked_list.insert_tump(linked)
    this.delete_frequentItem()
  }
  add_frequentItem(key: number) {
    const next = this.next as frequentItem
    const new_item = new frequentItem(key)
    this.next = new_item
    new_item.pre = this

    new_item.next = next
    next.pre = new_item
  }
  delete_frequentItem() {
    const linked_list = this.item as linked_list
    if (linked_list.nothing()) {
      const pre = this.pre as frequentItem
      const next = this.next as frequentItem
      pre.next = next
      next.pre = pre
    }
  }
}

class LFUCache {
  linked_item: Map<number, linked_item>
  frequent_list: frequent_list
  capacity: number
  cache_num: number
  constructor(capacity: number) {
    this.cache_num = 0
    this.capacity = capacity
    this.linked_item = new Map()
    this.frequent_list = new frequent_list()
  }
  get(key: number): number {
    const map = this.linked_item
    if (map.has(key)) {
      const target = map.get(key) as linked_item
      this.move(target)
      return target.val
    }
    return -1
  }
  put(key: number, value: number): void {
    const map = this.linked_item
    if (this.capacity === 0) return
    if (map.has(key)) {
      const target = map.get(key) as linked_item
      target.val = value
      this.move(target)
    } else {
      const frequent_list = this.frequent_list
      if (this.cache_num === this.capacity) {
        const key = frequent_list.delete()
        map.delete(key)
      } else {
        this.cache_num++
      }
      const target = new linked_item(key, value)
      map.set(key, target)
      frequent_list.insert(target)
    }
  }
  move(linked: linked_item) {
    const frequent = linked.frequent as frequentItem
    linked.delete()
    frequent.next_item(linked)
  }
}


const cache = new LFUCache(2);

console.log(cache.put(1, 1))
console.log(cache.put(2, 2))
console.log(cache.get(1)) // 返回 1)
console.log(cache.put(3, 3)) // 去除 key 2)
console.log(cache.get(2)) // 返回 -1 (未找到key 2))
console.log(cache.get(3)) // 返回 3)
console.log(cache.put(4, 4)) // 去除 key 1)
console.log(cache.get(1)) // 返回 -1 (未找到 key 1))
console.log(cache.get(3)) // 返回 3)
console.log(cache.get(4)) // 返回 4)





let res1 = runScript(["LFUCache", "put", "put", "put", "put", "put", "get", "put", "get", "get", "put", "get", "put", "put", "put", "get", "put", "get", "get", "get", "get", "put", "put", "get", "get", "get", "put", "put", "get", "put", "get", "put", "get", "get", "get", "put", "put", "put", "get", "put", "get", "get", "put", "put", "get", "put", "put", "put", "put", "get", "put", "put", "get", "put", "put", "get", "put", "put", "put", "put", "put", "get", "put", "put", "get", "put", "get", "get", "get", "put", "get", "get", "put", "put", "put", "put", "get", "put", "put", "put", "put", "get", "get", "get", "put", "put", "put", "get", "put", "put", "put", "get", "put", "put", "put", "get", "get", "get", "put", "put", "put", "put", "get", "put", "put", "put", "put", "put", "put", "put"]
  , [[10], [10, 13], [3, 17], [6, 11], [10, 5], [9, 10], [13], [2, 19], [2], [3], [5, 25], [8], [9, 22], [5, 5], [1, 30], [11], [9, 12], [7], [5], [8], [9], [4, 30], [9, 3], [9], [10], [10], [6, 14], [3, 1], [3], [10, 11], [8], [2, 14], [1], [5], [4], [11, 4], [12, 24], [5, 18], [13], [7, 23], [8], [12], [3, 27], [2, 12], [5], [2, 9], [13, 4], [8, 18], [1, 7], [6], [9, 29], [8, 21], [5], [6, 30], [1, 12], [10], [4, 15], [7, 22], [11, 26], [8, 17], [9, 29], [5], [3, 4], [11, 30], [12], [4, 29], [3], [9], [6], [3, 4], [1], [10], [3, 29], [10, 28], [1, 20], [11, 13], [3], [3, 12], [3, 8], [10, 9], [3, 26], [8], [7], [5], [13, 17], [2, 27], [11, 15], [12], [9, 19], [2, 15], [3, 16], [1], [12, 17], [9, 1], [6, 19], [4], [5], [5], [8, 1], [11, 7], [5, 2], [9, 28], [1], [2, 2], [7, 4], [4, 22], [7, 24], [9, 26], [13, 28], [11, 26]], [LFUCache])

let res2 = runScript(["LFUCache", "put", "get", "put", "get", "get"]
  , [[1], [2, 1], [2], [3, 2], [2], [3]], [LFUCache])

let res3 = runScript(["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
  , [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]], [LFUCache])


let res4 = runScript(["LFUCache", "put", "get"],
  [[1], [0, 0], [0]], [LFUCache])

//[null,null,-1]
let res5 = runScript(["LFUCache", "put", "get"],
  [[0], [0, 0], [0]], [LFUCache])

console.log()