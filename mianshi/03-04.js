/**
 * 自己--easy
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.temp = []
  this.list = []
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.temp.push(x)
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.temp.length < 0 && this.list.length < 0) {
    return null
  }
  this.peek()
  return this.list.pop()
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.temp.length < 0 && this.list.length < 0) {
    return null
  }
  if (this.list.length < 1) {
    while (this.temp.length > 0) {
      this.list.push(this.temp.pop())
    }
  }
  return this.list[this.list.length - 1]
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.temp.length > 0 || this.list.length > 0) {
    return false
  }
  return true
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
