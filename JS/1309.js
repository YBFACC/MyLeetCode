/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  var res=''
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] == '#') {
      res += String.fromCharCode(parseInt(s.slice(i, i + 2)) + 96)
      i += 2
    } else {
      res += String.fromCharCode(parseInt(s.slice(i, i + 1)) + 96)
    }
  }
  return res
}

var s = '12#23#'
console.log(freqAlphabets(s))
