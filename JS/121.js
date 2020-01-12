/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit1 = function(prices) {
  var res = 0
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let temp = prices[j] - prices[i]
      temp > res ? (res = temp) : null
    }
  }
  return res
}

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var res = 0
  var min = prices[0]
  for (let i = 0; i < prices.length; i++) {
    prices[i] < min ? (min = prices[i]) : null;
    prices[i] - min > res ? (res = prices[i] - min) : null
  }

  return res
}

var prices = [7, 1, 5, 3, 6, 4]
maxProfit(prices)
