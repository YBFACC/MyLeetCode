/**
 * 自己--hashmap和sort排序--性能还行✌️
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
  var hashMap = new Map()
  for (let i = 0; i < S.length; i++) {
    hashMap.set(S[i], i)
  }
  var arr = T.split('')
  for (let i = 0; i < arr.length; i++) {
    hashMap.set(arr[i], hashMap.has(arr[i]) ? hashMap.get(arr[i]) : 99)
  }
  arr.sort((a, b) => hashMap.get(a) - hashMap.get(b))
  return arr.join('')
}
customSortString('exv', 'xwvee')
