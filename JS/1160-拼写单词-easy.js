/*
 * @lc app=leetcode.cn id=1160 lang=javascript
 *
 * [1160] 拼写单词
 */

// @lc code=start
/**
 * 自己--一次ac--性能差
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let arrW = words.map(v => {
    return v.split('').sort()
  })
  let arrC = chars.split('').sort()
  let res = 0
  arrW.forEach(item => {
    let len = item.length
    for (let i = 0; i < len; ) {
      for (let j = 0; j < arrC.length; j++) {
        if (item[i] === arrC[j]) {
          if (i === len - 1) res += len
          i++
        }
      }
      break
    }
  })
  return res
}
// @lc code=end

countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr')
