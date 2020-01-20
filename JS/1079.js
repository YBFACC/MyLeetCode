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


/**
 * 
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  tiles = Array.from(tiles).sort() // 有序字母数组
  const visit = new Set() // 已经选过的位置
  let res = 0

  function backtrack () {
    for (let i = 0; i < tiles.length; ++i) {
      if (visit.has(i)) continue // 该字母不存在
      if (i > 0 && tiles[i] === tiles[i - 1] && !visit.has(i - 1)) continue // 该字母重复
      visit.add(i)
      ++res
      backtrack()
      visit.delete(i)
    }
  }

  backtrack()
  return res
};

numTilePossibilities('AAB')
