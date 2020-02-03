/**
 * 自己---正则--性能一般
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  var res = s.match(/\S+/g, s)
  return res === null ? 0 : res.length
}

console.log(countSegments(", , , ,        a, eaefa"))
