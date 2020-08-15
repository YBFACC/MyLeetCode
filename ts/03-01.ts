/**
 * 参考--每栈间隔3个单位
 * 一号栈：0， 0 + 3， 3 + 3 ... stackSize - 3
 * 二号栈：1， 1 + 3， 4 + 3 ... stackSize - 2
 * 三号栈：2， 2 + 3， 5 + 3 ... stackSize - 1
 */
class TripleInOne {
  stack: (number | null)[]
  index: number[]
  stackSize: number
  constructor(stackSize: number) {
    this.stack = new Array(stackSize * 3)
    this.index = [0, 1, 2]
    this.stackSize = stackSize
  }

  push(stackNum: number, value: number): void {
    if (this.index[stackNum] >= this.stackSize * 3) {
      return
    }
    this.stack[this.index[stackNum]] = value
    this.index[stackNum] += 3
  }

  pop(stackNum: number): any {
    if (this.isEmpty(stackNum)) {
      return -1
    }
    this.index[stackNum] -= 3
    return this.stack[this.index[stackNum]]
  }

  peek(stackNum: number): any {
    if (this.isEmpty(stackNum)) {
      return -1
    }
    return this.stack[this.index[stackNum] - 3]
  }

  isEmpty(stackNum: number): any {
    return this.index[stackNum] < 3
  }
}
