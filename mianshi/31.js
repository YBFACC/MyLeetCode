/**
 * 自己--辅助栈--性能一般
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = []
  while (popped.length > 0 && pushed.length > 0) {
    stack.push(pushed.shift())

    while (stack[stack.length - 1] === popped[0]) {
      stack.pop()
      popped.shift()
      if (stack.length === 0 || popped.length === 0) break
    }
  }
  return popped.length === 0 && pushed.length === 0
}
validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])
