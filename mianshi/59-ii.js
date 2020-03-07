/**
 * 参考--感觉题解的维护一个单调的双端队列不适合js--性能差
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */


var MaxQueue = function() {
  this.queue = []
  this.maxqueue = []
}

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  if (this.maxqueue.length === 0) return -1
  return this.maxqueue[0]
}

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.queue.push(value)
  while (
    this.maxqueue.length  &&
    this.maxqueue[this.maxqueue.length - 1] < value
  ) {
    this.maxqueue.pop()
  }
  this.maxqueue.push(value)
}

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if (!this.queue.length) return -1
  let num = this.queue.shift()
  if (num === this.maxqueue[0]) this.maxqueue.shift()
  return num
}

