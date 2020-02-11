/**
 * 自己--考语文呢--性能一遍
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
  var num = function(arr) {
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i]
        .split('')
        .sort()
        .join('')
      let count = 1
      for (let j = 1; j < item.length; j++) {
        if (item[0] === item[j]) {
          count++
        } else {
          break
        }
      }
      arr[i] = count
    }
    return arr
  }
  var queriesNum = num(queries)
  var wordsNum = num(words).sort((a, b) => b - a)
  var res = []
  queriesNum.forEach(v => {
    let count = 0
    for (let i = 0; i < wordsNum.length; i++) {
      if (wordsNum[i] > v) {
        count++
      } else {
        break
      }
    }
    res.push(count)
  })
  return res
}

numSmallerByFrequency(['bbb', 'cc'], ['a', 'aa', 'aaa', 'aaaa'])
