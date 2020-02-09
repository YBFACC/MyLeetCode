/**
 * 自己---一遍过---性能一遍
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  var arr = S.split(' ')
  var a = 'a'
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].search(/^[AEIOUaeiou]/) !== 0) {
      let temp = arr[i][0]
      arr[i] = arr[i].slice(1)
      arr[i] = arr[i] + temp
    }
    arr[i] = arr[i] + 'ma' + a
    a += 'a'
  }
  return arr.join(' ')
}

console.log(toGoatLatin('I speak Goat Latin'))
