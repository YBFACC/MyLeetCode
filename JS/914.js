/**
 * 参考---递归求公因子nb--性能一般
 * var getcommon = function(a, b) {
    if (b === 0) return a
    return getcommon(b, a % b)
  }
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  if (deck.length < 2) return false
  var hashMap = new Map()
  var getcommon = function(a, b) {
    if (b === 0) return a
    return getcommon(b, a % b)
  }
  for (let i = 0; i < deck.length; i++) {
    hashMap.set(deck[i], hashMap.has(deck[i]) ? hashMap.get(deck[i]) + 1 : 1)
  }
  var min = Number.MAX_VALUE
  hashMap.forEach((v, k) => {
    min = Math.min(min, v)
    if (v < 2) return false
  })
  for (const [k, v] of hashMap) {
    if (getcommon(v, min) === 1) {
      return false
    }
  }
  return true
}
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]))
