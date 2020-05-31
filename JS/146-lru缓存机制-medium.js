/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start

/**
 * copy--利用js的map是有序来简化
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.map = new Map()
}

LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    let value = this.map.get(key)
    this.map.delete(key) //删除重新设置，会更新位置
    this.map.set(key, value)
    return this.map.get(key)
  }
  return -1
}

LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    //存在则删除
    this.map.delete(key)
  }
  if (this.map.size == this.capacity) {
    //如果到达临界值就需要删除第一个
    const { value: key, done } = this.map.keys().next()
    this.map.delete(key)
  }
  this.map.set(key, value)
}
// @lc code=end

//参考--map+双向队列
class ListNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.pre = null
  }
}

class LRUCache {
  constructor(cache) {
    this.cache = cache
    this.count = 0
    this.map = {}
    this.dummyHead = new ListNode()
    this.dummyTail = new ListNode()
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead
  }
  get(key) {
    let node = this.map[key]
    if (!node) return -1
    this.moveToHead(node)
    return node.value
  }
  put(key, value) {
    let node = this.map[key]
    if (!node) {
      let newNode = new ListNode(key, value)
      this.map[key] = newNode
      this.addToHead(newNode)
      this.count++
      if (this.count > this.cache) {
        this.removeLater()
      }
    } else {
      node.value = value
      this.moveToHead(node)
    }
  }
  moveToHead(node) {
    this.removeFromList(node)
    this.addToHead(node)
  }
  removeFromList(node) {
    let temp_pre = node.pre
    let temp_next = node.next
    temp_pre.next = temp_next
    temp_next.pre = temp_pre
  }
  addToHead(node) {
    node.pre = this.dummyHead
    node.next = this.dummyHead.next

    this.dummyHead.next.pre = node
    this.dummyHead.next = node
  }
  removeLater() {
    let later = this.dummyTail.pre
    this.removeFromList(later)
    delete this.map[later.key]
    this.count--
  }
}

let cache = new LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
cache.get(1)
cache.put(3, 3)
cache.get(2)
cache.put(4, 4)
cache.get(1)
cache.get(3)
cache.get(4)
