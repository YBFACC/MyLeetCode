/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  var res = []
  var func = function(S, temp, depth) {
    if (depth != 4 && S.length > 15 - depth * 4) {
      return
    } else if (depth == 4 && S.length > 0) {
      return
    } else if (depth == 4 && S.length == 0) {
      res.push(temp.slice())
      return
    }
    for (let i = 1; i <= 3; i++) {
      let tmp = S.slice(0, i)
      let num = parseInt(tmp)
      if (num > 255 || i > S.length) {
        continue
      }
      if (num > 100) {
        func(S.slice(i), depth == 0 ? tmp : temp + '.' + tmp, depth + 1)
      } else if (i == 1 && num == 0) {
        func(S.slice(1), depth == 0 ? tmp : temp + '.' + tmp, depth + 1)
        break
      } else {
        func(S.slice(i), depth == 0 ? tmp : temp + '.' + tmp, depth + 1)
      }
    }
  }
  func(s, '', 0)
  return res
}

restoreIpAddresses('010010')
