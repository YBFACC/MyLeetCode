/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * 自己--正则
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  //得到数字和字符串
  let reg = /(\d+)\[([a-zA-Z]+)\]/g
  //检测是否完成
  let all = /\[.*\]/
  //循环直到完成编码
  while (all.test(s)) {
    s = s.replace(reg, (match, p1, p2) => p2.repeat(~~p1))
  }
  return s
}
// @lc code=end

var decodeString = s => {
  let stack_num = []
  let stack_str = []
  let num = 0
  let res = ''
  for (const char of s) {
    if (!isNaN(char)) {
      num = num * 10 + ~~char
    } else if (char === '[') {
      stack_num.push(num)
      stack_str.push(res)
      res = ''
      num = 0
    } else if (char === ']') {
      res = stack_str.pop() + res.repeat(stack_num.pop())
    } else {
      res += char
    }
  }
  return res
}

decodeString('100[leetcode]')
