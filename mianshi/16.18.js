/**
 * 自己--eval执行模板字符串-注意边界处理
 * a !==b
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
var patternMatching = function (pattern, value) {
  if (value.length === 0 && pattern.length === 0) return true
  if (pattern.length === 0) return false
  let len = { a: 0, b: 0 }
  let str = ''
  let firstA = Infinity
  let firstB = Infinity
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === 'a') {
      str += '${A}'
      len.a++
      firstA = Math.min(i, firstA)
    } else {
      str += '${B}'
      len.b++
      firstB = Math.min(i, firstB)
    }
  }

  if (value.length === 0) {
    if (firstA !== Infinity && firstB !== Infinity) {
      return false
    } else {
      return true
    }
  }

  let maxA = Math.floor(value.length / len.a)
  let maxB = Math.floor(value.length / len.b)
  if (firstA !== Infinity && firstB !== Infinity) {
    if (firstA < firstB) {
      for (let i = 0; i <= maxA; i++) {
        let A = value.slice(0, i)
        for (let j = 0; j <= maxB; j++) {
          let B = value.slice(i * firstB, i * firstB + j)
          if (eval('`' + str + '`') === value) {
            return true
          }
        }
      }
    } else {
      for (let i = 0; i <= maxB; i++) {
        let B = value.slice(0, i)
        for (let j = 0; j <= maxA; j++) {
          let A = value.slice(i * firstA, i * firstA + j)
          if (eval('`' + str + '`') === value) {
            return true
          }
        }
      }
    }
  } else if (firstA === Infinity) {
    for (let i = 0; i <= maxB; i++) {
      let B = value.slice(0, i)
      let A = ''
      if (eval('`' + str + '`') === value) {
        return true
      }
    }
  } else {
    for (let i = 0; i <= maxA; i++) {
      let B = ''
      let A = value.slice(0, i)
      if (eval('`' + str + '`') === value) {
        return true
      }
    }
  }

  return false
}
