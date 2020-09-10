import { runScript } from "leetcode-class";
//自己--重做--map+双向链表
class linkedTwo {
  pre: linkedTwo | undefined
  next: linkedTwo | undefined
  val: number
  key: number
  constructor(val: number, key: number, pre?: linkedTwo, next?: linkedTwo) {
    this.pre = pre
    this.next = next
    this.val = val
    this.key = key
  }
}

class LRUCache {
  max: number
  map: Map<number, linkedTwo>
  tump: linkedTwo
  tail: linkedTwo
  constructor(capacity: number) {
    this.max = capacity
    this.map = new Map()
    this.tump = new linkedTwo(NaN, NaN)
    this.tail = new linkedTwo(NaN, NaN)
    this.tump.next = this.tail
    this.tail.pre = this.tump
  }

  get(key: number): number {
    const map = this.map
    if (map.has(key)) {
      const linked = map.get(key)
      return this.change(linked)
    }
    return -1
  }

  put(key: number, value: number): void {
    const map = this.map
    if (map.has(key)) {
      const linked = map.get(key)
      this.change(linked, value)
    } else {
      if (map.size >= this.max) {
        const del_key = this.delete()
        map.delete(del_key)
      }
      map.set(key, this.insert(value, key))

    }
  }
  change(linked: linkedTwo | undefined, value?: number): number {
    if (!linked) return -1
    if (!linked.pre || !linked.next) return -1
    if (value) {
      linked.val = value
    }
    const pre = linked.pre
    const next = linked.next
    pre.next = next
    next.pre = pre

    const temp = this.tump.next
    if (!temp) return -1
    linked.pre = this.tump
    this.tump.next = linked

    linked.next = temp
    temp.pre = linked
    return linked.val
  }
  delete(): number {
    const target = this.tail.pre
    if (!target || !target.pre || !target.key) return -1
    const pre = target.pre
    pre.next = this.tail
    this.tail.pre = pre
    return target.key
  }
  insert(value: number, key: number): linkedTwo {
    const temp = this.tump.next
    const target = new linkedTwo(value, key)
    if (!temp) return target
    target.pre = this.tump
    this.tump.next = target

    target.next = temp
    temp.pre = target
    return target
  }
}

console.log(runScript(["LRUCache", "put", "put", "get", "put", "put", "get"]
  , [[2], [2, 1], [2, 2], [2], [1, 1], [4, 1], [2]], [LRUCache]))

