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

/**
 * map处理方式
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let needs = new Map(),
    res = 0

  for (let n of chars) {
    needs.set(n, needs.has(n) ? needs.get(n) + 1 : 1)
  }

  for (let s of words) {
    if (help(s, new Map(needs))) {
      res += s.length
    }
  }
  return res
}

function help(s, hash) {
  for (let n of s) {
    if (!hash.has(n)) {
      return false
    } else {
      hash.set(n, hash.get(n) - 1)
      if (hash.get(n) < 0) return false
    }
  }
  return true
}

/**
 * 这个方式好一些
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let res = 0;
  words.forEach(word => {
      let index = 0
      let str = chars
      while(index < word.length) {
          let char = word.charAt(index)
          if (str.includes(char)) {
              str = str.replace(char, '')
              if (index === word.length -1) {
                  res += word.length
              }
          } else {
              break
          }
          index++
      }
  })
  return res
};
countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr')
