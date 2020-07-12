/**
 * 自己--easy
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  let map = new Map()

  for (const item of s) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1)
  }
  let res = 0
  for (const [key, value] of map) {
    if (value % 2 === 1) res++
  }
  return res <= 1
}

console.log(canPermutePalindrome('tactcoa'))
