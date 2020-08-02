/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * 自己--没啥算法-纯恶心人
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const res = []
  let index = 0
  let count = 0
  for (const word of words) {
    if (count + word.length > maxWidth) {
      index++
      count = 0
    }

    if (!res[index]) {
      res[index] = []
    }
    res[index].push(word)
    count += word.length + 1
  }

  const temp = []

  for (let i = 0; i < res.length; i++) {
    const item = res[i]
    if (i === res.length - 1) {
      let wordLen = 0
      for (const word of item) {
        wordLen += word.length
      }
      let len = item.join(' ') + trim(maxWidth - wordLen - item.length + 1)
      temp.push(len)
    } else {
      if (item.length === 1) {
        temp.push(item[0] + trim(maxWidth - item[0].length))
      } else {
        let wordLen = 0
        for (const word of item) {
          wordLen += word.length
        }
        let num = Math.floor((maxWidth - wordLen) / (item.length - 1))
        let last = maxWidth - wordLen - num * (item.length - 1)
        let _res = ''
        for (let i = 0; i < item.length; i++) {
          if (i !== item.length - 1) {
            _res += item[i] + trim(last > 0 ? num + 1 : num)
            last--
          } else {
            _res += item[i]
          }
        }

        temp.push(_res)
      }
    }
  }

  return temp
}
function trim(num) {
  let res = ''
  while (num > 0) {
    res += ' '
    num--
  }
  return res
}
// @lc code=end

fullJustify(
  [
    'Science',
    'is',
    'what',
    'we',
    'understand',
    'well',
    'enough',
    'to',
    'explain',
    'to',
    'a',
    'computer.',
    'Art',
    'is',
    'everything',
    'else',
    'we',
    'do'
  ],
  20
)
