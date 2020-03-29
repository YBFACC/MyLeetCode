/**
 * 自己--秒杀
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1)
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return s[i]
    }
  }
  return ' '
}
firstUniqChar("   ")