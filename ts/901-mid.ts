
/**
 * 参考－单调栈
 */
class StockSpanner {
  stack: number[][]
  idx: number
  constructor() {
    this.stack = []
    this.stack.push([-1, Number.MAX_VALUE]);
    this.idx = -1
  }

  next(price: number): number {
    this.idx++
    while (price >= this.stack[this.stack.length - 1][1]) {
      this.stack.pop()
    }
    let res = this.idx - this.stack[this.stack.length - 1][0]
    this.stack.push([this.idx, price])
    return res
  }
}

/**
* Your StockSpanner object will be instantiated and called as such:
* var obj = new StockSpanner()
* var param_1 = obj.next(price)
*/