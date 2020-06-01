/**
 * 自己--秒杀
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
  let res = 0
  const func = function (num) {
    res += num--
    !!num && func(num)
  }
  func(n)
  return res
}

sumNums(3)

//0的隐式转化为false
var sumNums = function (n) {
  let res = 0
  const func = function (num) {
    res += num--
    num && func(num)
  }
  func(n)
  return res
}
