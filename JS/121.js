/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var res = 0
  for (let i = 0; i < prices.length; i++) {
    for (let j = i+1; j < prices.length; j++) {
      let temp = prices[j]-prices[i]
      temp > res ? (res = temp) : null
    }
  }
  return res
}
