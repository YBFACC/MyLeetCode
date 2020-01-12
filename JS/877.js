/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles, res) {
  var ya = 0
  var li = 0
  var res = false
  var func = function(piles, index, ya, li, res) {
    for (let index = 0; index < piles.length; index++) {
      if (piles[0] >= piles[piles.length - 1]) {
        index % 2 == 0 ? (ya += piles.shift()) : (li += piles.shift())
        func(piles.slice(), index + 1, ya, li, res)
      } else {
        index % 2 == 0 ? (ya += piles.pop()) : (li += piles.pop())
        func(piles.slice(), index + 1, ya, li, res)
      }
    }
  }
  func(piles, 0, ya, li, res)

  console.log(111111)

  return res
}

var piles = [5, 3, 4, 5]
console.log(new stoneGame(piles))
