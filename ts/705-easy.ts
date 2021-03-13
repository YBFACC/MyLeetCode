/*
 * @lc app=leetcode.cn id=705 lang=typescript
 *
 * [705] 设计哈希集合
 */

//参考--hash

// @lc code=start
class MyHashSet {
  base = 10001
  list: number[][]
  constructor() {
    this.list = Array.from({ length: this.base }, () => [])
  }

  add(key: number): void {
    const index = this.hash(key)
    const list = this.list
    //注意key唯一
    for (let i = 0; i < list[index].length; i++) {
      if (list[index][i] === key) {
        return
      }
    }
    list[index].push(key)
  }

  remove(key: number): void {
    const index = this.hash(key)
    const list = this.list
    for (let i = 0; i < list[index].length; i++) {
      if (list[index][i] === key) {
        list[index].splice(i, 1)
        return
      }
    }
  }

  contains(key: number): boolean {
    const index = this.hash(key)
    const list = this.list
    for (let i = 0; i < list[index].length; i++) {
      if (list[index][i] === key) {
        return true
      }
    }
    return false
  }
  hash(key: number) {
    return key % this.base
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end

