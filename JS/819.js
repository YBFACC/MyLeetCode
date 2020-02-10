/**
 * 自己---时间性能差
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  var arr = paragraph.toLowerCase().match(/\w+/g)
  var hashMap = new Map()
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (!banned.includes(item)) {
      hashMap.set(item, hashMap.has(item) ? 1 + hashMap.get(item) : 1)
    }
  }
  var count = Number.MIN_VALUE
  var res = ''
  hashMap.forEach((v, k) => {
    if (v > count) {
      count = v
      res = k
    }
  })
  return res
}
mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', [
  'hit'
])
