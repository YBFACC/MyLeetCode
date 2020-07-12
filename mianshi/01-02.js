/**
 * 自己--easy
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  const map = new Map()
  for (const item of s1) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1)
  }
  for (let i = 0; i < s2.length; i++) {
    if (!map.has(s2[i]) || map.get(s2[i]) === 0) return false
    map.set(s2[i], map.get(s2[i]) - 1)
  }
  return true
}

console.log(CheckPermutation('abc', 'bca'))
