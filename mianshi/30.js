/**
 * 参考--还是辅助栈--性能一般
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this._min = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  if (x <= this._min[this._min.length - 1]||this._min.length===0) {
    this._min.push(x)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this._min[this._min.length - 1] === this.stack.pop()) {
    this._min.pop()
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this._min[this._min.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
