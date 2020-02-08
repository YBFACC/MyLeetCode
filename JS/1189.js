/**
 * 自己---把0当成o了😨---性能棒
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  var hashMap = new Map([
    ['b', 0],
    ['a', 0],
    ['l', 0],
    ['o', 0],
    ['n', 0]
  ])
  var arr = text.match(/[balon]/g)
  if (arr === null) return 0
  var res = Number.MAX_VALUE
  arr.forEach(e => {
    hashMap.set(e, hashMap.get(e) + 1)
  })
  hashMap.forEach((v, k) => {
    if (k === 'l' || k === 'o') {
      res = Math.min(res, v / 2)
    } else {
      res = Math.min(res, v)
    }
  })
  return Math.trunc(res)
}

console.log(maxNumberOfBalloons('hpitp'))
