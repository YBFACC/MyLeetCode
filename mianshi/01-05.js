/**
 * 自己--3种编辑
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
  if (first === second) return true
  if (first.length === 0 && second.length === 1) {
    return true
  }
  if (first.length === 1 && second.length === 0) {
    return true
  }
  let res = false
  for (let i = 0; i <= first.length; i++) {
    //删除
    const str2 = first.slice(0, i > 0 ? i - 1 : 0) + first.slice(i)
    if (str2 === second) {
      res = true
      break
    }
    for (let j = 97; j <= 122; j++) {
      //插入
      const str1 = first.slice(0, i) + String.fromCharCode(j) + first.slice(i)
      //替换
      const str3 =
        first.slice(0, i) + String.fromCodePoint(j) + first.slice(i + 1)
      if (str1 === second || str3 === second) {
        res = true
      }
    }
  }
  return res
}
oneEditAway('a', 'ab')
