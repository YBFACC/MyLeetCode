/**
 * 自己---一遍过--灵感来自893题--性能差
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var res = []
  var arr = strs.map(v => {
    return v
      .split('')
      .sort()
      .join('')
  })
  for (let i = 0; i < arr.length; i++) {
    let temp = []
    let str = arr[i]
    if (str !== '#') {
      temp.push(strs[i])
      arr[i] = '#'
    } else {
      continue
    }
    while (true) {
      let index = arr.indexOf(str)
      if (index === -1) {
        break
      } else {
        arr[index] = '#'
        temp.push(strs[index])
      }
    }
    res.push(temp)
  }
  return res
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

