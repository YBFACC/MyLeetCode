var CQueue = function() {
  this.temp = []
  this.list = []
}

/**
 * 自己--秒杀
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.list.push(value)
  return null
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  while (this.list.length > 0) {
    this.temp.push(this.list.pop())
  }
  let res = this.temp.pop()
  while (this.temp.length > 0) {
    this.list.push(this.temp.pop())
  }
  return res || -1
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
