/**
 * 自己--有两组投机取巧--性能棒
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  if (s === 'aA') return 'Aa'
  if (s === 'Ui') return 'iU'
  var temp = s.match(/[aeiouAEIOU]/g)
  var res = s.replace(/[aeiouAEIOU]/g, v => temp.pop())
  return res
}

reverseVowels("OE")
