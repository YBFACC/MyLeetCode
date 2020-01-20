/**
 * 自己
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
  var res = []
  var n = tiles.length
  var hash = {}
  var func = function(temp, index) {
    if (index > n) {
      return
    } else if (!res.includes(temp) && temp !== '') {
      res.push(temp)
    }

    for (let i = 0; i < n; i++) {
      if (hash[i] === true) {
        continue
      }
      hash[i] = true
      temp += tiles[i]
      func(temp, index + 1)
      temp = temp.slice(0, -1)
      hash[i] = false
    }
  }
  func('', 0)
  return res.length
}


numTilePossibilities('AAB')
