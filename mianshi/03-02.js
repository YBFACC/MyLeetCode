/**
 * 自己--双栈
 * initialize your data structure here.
 */
var MinStack = function () {
  this.heighten = []
  this.stack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  if (
    this.heighten.length === 0 ||
    this.heighten[this.heighten.length - 1] >= x
  ) {
    this.heighten.push(x)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let temp = this.stack.pop()
  if (this.heighten[this.heighten.length - 1] === temp) {
    this.heighten.pop()
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
MinStack.prototype.getMin = function () {
  return this.heighten[this.heighten.length - 1]
}

var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
var param_4 = obj.getMin()
obj.pop()
var param_3 = obj.top()

var param_5 = obj.getMin()
