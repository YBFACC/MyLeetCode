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

decodeString("3[a]2[b4[F]c]")
