/**
 * 自己--easy
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0
  let min = prices[0]
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > min) {
      res = Math.max(res, prices[i] - min)
    } else {
      min = Math.min(min, prices[i])
    }
  }
  return res
}

maxProfit([7, 6, 4, 3, 1])
