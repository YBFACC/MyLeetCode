/**
 * 一开始没看懂题目😤---参考---性能一般
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  var HashMap = new Map()
  for (let i = 0; i < s.length; i++) {
    HashMap.set(s[i], HashMap.has(s[i]) ? 1 + HashMap.get(s[i]) : 1)
  }
  for (let i = 0; i < s.length; i++) {
    if (HashMap.get(s[i]) === 1) {
      return i
    }
  }
  return -1
}
console.log(firstUniqChar('leetcode'))
