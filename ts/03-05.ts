//参考--两个栈来回倒进行排序
class SortedStack {
  stack: (number | undefined)[]
  temp: (number | undefined)[]
  constructor() {
    this.stack = []
    this.temp = []
  }

  push(val: number): void {
    if (!this.isEmpty() && val > this.top()) {
      while (!this.isEmpty() && val > this.top()) {
        this.temp.push(this.stack.pop())
      }
      this.stack.push(val)
      while (this.temp.length > 0) {
        this.stack.push(this.temp.pop())
      }
    } else {
      this.stack.push(val)
    }
  }

  pop(): void {
    if (!this.isEmpty()) {
      this.stack.pop()
    }
  }
  top(): number {
    return this.stack[this.stack.length - 1] as number
  }
  peek(): number {
    return this.isEmpty() ? -1 : this.top()
  }

  isEmpty(): boolean {
    if (this.stack.length > 0) {
      return false
    }
    return true
  }
}
