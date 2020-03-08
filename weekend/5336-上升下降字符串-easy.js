/**
 * 自己--21双周赛
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  let map = new Map()
  s = s
    .split('')
    .sort()
    .join('')
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1)
  }
  let res = ''
  let temp = true
  while (true) {
    let str = []
    map.forEach((v, k) => {
      if (v > 0) {
        str.push(k)
        map.set(k, --v)
      }
    })
    if (str.length === 0) break
    if (!temp) {
      res += str.reverse().join('')
    } else {
      res += str.join('')
    }
    temp = !temp
  }
  return res
}
sortString("spo")
