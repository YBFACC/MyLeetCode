/**
 * 自己---时间差
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var res = []
  res.push([1])
  res.push([1, 1])
  res.push([2, 1])
  for (let i = 3; i < n; i++) {
    let temp = res[i - 1]
    let curr = 1
    let arr = []
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === temp[i + 1]) {
        curr++
      } else {
        arr.push(curr)
        arr.push(temp[i])
        curr=1
      }
    }
    res.push(arr)
  }  
  return res[n-1].join("")
}

console.log(countAndSay(4));

