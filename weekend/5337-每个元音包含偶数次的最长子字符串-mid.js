/**
 * 参考--5个标记2进制标示--21双周
 * aeiou
 * 00000
 * 10101
 * 01010
 * 10101
 * @param {string} s
 * @return {number}
 */

var findTheLongestSubstring = function(s) {
  var state = new Array(32)
  var cur = 0
  var ans = 0
  state[0] = -1
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'a':
        cur ^= 1//1
        break
      case 'e':
        cur ^= 2//10
        break
      case 'i':
        cur ^= 4//100
        break
      case 'o':
        cur ^= 8//1000
        break
      case 'u':
        cur ^= 16//10000
        break
      default:
        break
    }
    if (state[cur] === undefined) {
      state[cur] = i
    } else {
      ans = Math.max(ans, i - state[cur])
    }
  }
  return ans
}
findTheLongestSubstring("eleetminicoworoep")
/**
 * 自己--暴力法--不通过
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
  let res = ''
  function obj() {
    this.a = 0
    this.e = 0
    this.i = 0
    this.o = 0
    this.u = 0
  }
  const set_num = function(char, obj) {
    if (char === 'a') {
      obj.a++
    } else if (char === 'e') {
      obj.e++
    } else if (char === 'i') {
      obj.i++
    } else if (char === 'o') {
      obj.o++
    } else if (char === 'u') {
      obj.u++
    }
  }
  const isOdd = function(obj) {
    if (
      obj.a % 2 === 0 &&
      obj.e % 2 === 0 &&
      obj.i % 2 === 0 &&
      obj.o % 2 === 0 &&
      obj.u % 2 === 0
    ) {
      return true
    }
    return false
  }
  for (let i = 0; i < s.length; i++) {
    let str = []
    let OBJ = new obj()
    for (let j = i; j < s.length; j++) {
      set_num(s[j], OBJ)
      str += s[j]
      if (isOdd(OBJ)) {
        str.length > res.length ? (res = str) : null
      }
    }
    if (s.length - i < str.length) break
  }
  return res.length
}
