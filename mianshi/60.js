/**
 * 自己--模拟过程
 * @param {number} n
 * @return {number[]}
 */
var twoSum = function (n) {
  let obj = {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1
  }
  while (n > 1) {
    let temp = {}
    for (const item of Object.keys(obj)) {
      for (let i = 1; i < 7; i++) {
        if (!temp[~~item + i]) {
          temp[~~item + i] = obj[item]
        } else {
          temp[~~item + i] += obj[item]
        }
      }
    }
    obj = temp
    n--
  }
  let all = 0
  for (const item of Object.values(obj)) {
    all += item
  }
  let res = []
  for (const item of Object.values(obj)) {
    res.push(item / all)
  }
  return res
}

console.log(twoSum(1))
