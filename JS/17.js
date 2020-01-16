/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(digits==""){
    return []
  }
  var obj = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  var darr = []
  digits.split('').forEach(e => {
    darr.push(obj[e])
  })
  var res = darr.reduce((a,b)=>{
    let temp=[]
    a.forEach((Ae)=>{
      b.forEach((Be)=>{
        temp.push(Ae+Be)
      })
    })
    return temp
  })  
  return res
}

var digits = '23456'
letterCombinations(digits)
