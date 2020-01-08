var maxProfit = function(prices) {
  var curr=0
  for (let index = 0; index < prices.length; index++) {
    let result = prices[index+1] - prices[index]
    if (result > 0) {
      curr += result
    }
  }
  return curr
}
var prices=[7,1,5,3,6,4]
new maxProfit(prices)
