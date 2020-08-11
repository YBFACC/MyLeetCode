
//自己--学习ts
class MyQueue {
  temp: Array<number | undefined>
  list: Array<number | undefined>
  constructor() {
    this.temp = []
    this.list = []
  }

  push(x: number): void {
    this.temp.push(x)
  }

  pop(): number | undefined {
    if (this.temp.length === 0 && this.list.length === 0) {
      return undefined
    }
    this.peek()
    return this.list.pop()
  }
  peek(): number | undefined {
    if (this.temp.length === 0 && this.list.length === 0) {
      return undefined
    }
    if (this.list.length === 0) {
      while (this.temp.length > 0) {
        this.list.push(this.temp.pop())
      }
    }
    return this.list[this.list.length - 1]
  }

  empty(): boolean {
    if (this.temp.length > 0 || this.list.length > 0) {
      return false
    }
    return true
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
