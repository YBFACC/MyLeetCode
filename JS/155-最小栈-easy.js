/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * 与59-ii最大队列的解法不同,每次如栈Math.min(x, this.min[this.min.length - 1])
 * initialize your data structure here.
 */
var MinStack = function () {
  this.list = []
  this.min = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.list.push(x)
  if (this.min.length > 0) {
    this.min.push(Math.min(x, this.min[this.min.length - 1]))
  } else {
    this.min.push(x)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.list.pop()

  this.min.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.list[this.list.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

let minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
minStack.getMin()
minStack.pop()
minStack.top()
minStack.getMin()
