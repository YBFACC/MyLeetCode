//copy--硬套代码-没意思
class StackOfPlates {
  stack: number[][]
  cap: number
  constructor(cap: number) {
    this.stack = []
    this.cap = cap
  }

  push(val: number): void {
    if (this.cap <= 0) return
    if (this.stack.length === 0) {
      this.stack[0] = new Array(this.cap).fill(1)
      this.stack[0][1] = val
    } else {
      if (this.stack[this.stack.length - 1][0] < this.cap) {
        this.stack[this.stack.length - 1][0]++
        this.stack[this.stack.length - 1][this.stack[this.stack.length - 1][0]] = val
      } else {
        this.stack.push(new Array(this.cap).fill(1))
        this.stack[this.stack.length - 1][1] = val
      }
    }
  }

  pop(): number {
    return this.popAt(this.stack.length - 1)
  }

  popAt(index: number): number {
    if (this.cap <= 0 || index < 0) return -1
    if (index < this.stack.length) {
      let tmp = this.stack[index][this.stack[index][0]--]
      if (!this.stack[index][0]) {
        this.stack.splice(index, 1)
      }
      return tmp
    }
    return -1
  }
}
