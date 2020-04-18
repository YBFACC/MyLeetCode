/**
 * 秒杀
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
  let res = 0
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] % 2 === 0) {
      res += coins[i] / 2
    } else {
      res += (coins[i] + 1) / 2
    }
  }
  return res
}

minCount([2, 3, 10])
