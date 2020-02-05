/**
 * 自己---正则--性能好
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  var arrname = name.match(/([a-z])\1*/g)
  var typedname = typed.match(/([a-z])\1*/g)
  if (arrname.length > typedname.length) return false
  for (let i = 0; i < arrname.length; i++) {
    if (
      arrname[i][0] === typedname[0][0] &&
      arrname[i].length <= typedname[0].length
    ) {
      typedname.shift()
    } else {
      return false
    }
  }
  return typedname.length === 0
}

console.log(isLongPressedName('xnhtq', 'xhhttqq'))
