/**
 * 自己---参考的1002--不对
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ''
  var res = strs[0].split('')
  for (let i = 1; i < strs.length; i++) {
    let temp = strs[i].split('')
    res = res.filter((v, i) => {
      let index = temp.indexOf(v)
      return i === index ? (temp[index] = 1) : false
    })
  }
  return res.join('')
}

/**
 * 参考---纵向比对--性能一般
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ''
  var res = ''
  var minLen = Number.MAX_VALUE
  strs.forEach(v => (minLen = Math.min(minLen, v.length)))
  for (let i = 0; i < minLen; i++) {
    let temp = strs[0][i]
    if (strs.every(v => temp === v[i])) {
      res += temp
    } else {
      break
    }
  }
  return res
}
console.log(longestCommonPrefix(['aca', 'cba']))
