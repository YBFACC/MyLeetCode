/**
 * 周赛-参考--取余在计数比较--0特判
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
  let map = new Map()
  for (const num of arr) {
    let key = num >= 0 ? num % k : ((num % k) + k) % k
    map.set(key, map.has(key) ? map.get(key) + 1 : 1)
  }
  let count = 0
  if (map.has(0) && map.get(0) % 2 !== 0) return false
  for (const [key, value] of map) {
    if (value !== map.get((k - key) % k)) {
      return false
    }
    count += value
  }
  return count === arr.length
}

console.log(canArrange([1, 2, 3, 4, 5, 6], 7))
