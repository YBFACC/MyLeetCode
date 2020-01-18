/**
 * 自己
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  if (s == '') {
    return []
  }
  var res = []
  var func = function(temp, start) {
    if (start == s.length) {
      if (
        temp.reduce((pre, curr) => {
          return pre & (curr == revStr(curr))
        }, true)
      ) {
        res.push(temp.slice())
      }

      return
    }
    for (let i = start; i < s.length; i++) {
      let a = s.substring(start, i + 1)
      temp.push(a)
      func(temp, i + 1)
      temp.pop()
    }
  }
  func([], 0)

  function revStr(str) {
    return str //字符串反转
      .split('') //将字符串转换为字符数组
      .reverse() //将数组中的字进行倒转
      .join('') //将数组中的字符拼接回字符串
  }
  return res
}
partition('seeslaveidemonstrateyetartsnomedievalsees')
