/**
 * 参考--递归好理解
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1
  if (n === 1) return x
  if (n < 0) return 1 / myPow(x, -n)
  if (x < 0) return n % 2 === 0 ? myPow(-x, n) : -myPow(-x, n)
  else {
    let temp = myPow(x, n >>> 1)
    return temp * temp * (n % 2 === 1 ? x : 1)
  }
}

/**
 * 参考--迭代--数学规律
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1

  if (x < 0) return n % 2 === 0 ? myPow(-x, n) : -myPow(-x, n)

  let res = 1

  for (let i = n; i !== 0; i = Math.trunc(i / 2)) {
    if (i % 2 !== 0) {
      res *= x
    }
    x *= x
  }

  return n < 0 ? 1 / res : res
}
console.log(myPow(2, -2))
