/**
 * 参考---过滤出公共元素---性能一般
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  var res = A[0].split('')
  for (let i = 1; i < A.length; i++) {
    let temp = A[i].split('')
    res = res.filter(v => {
      let index = temp.indexOf(v)
      return index !== -1 ? (temp[index] = 1) : false
    })
  }
  return res
}

commonChars(['bella', 'label', 'roller'])
