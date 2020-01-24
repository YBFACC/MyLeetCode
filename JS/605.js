/**
 * 自己---性能一般
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  var len = flowerbed.length
  var res = 0
  for (let i = 0; i < len; i++) {
    if (flowerbed[i] !== 1) {
      if (i === 0 && flowerbed[i + 1] !== 1) {
        res++
        flowerbed[i] = 1
      } else if (i === len - 1 && flowerbed[i - 1] !== 1) {
        res++
        flowerbed[i] = 1
      } else if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
        res++
        flowerbed[i] = 1
      }
    }
  }
  return res >= n ? true : false
}

/**
 *自己----优化---性能好
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  var len = flowerbed.length
  var res = 0
  for (let i = 0; i < len; i++) {
    if (flowerbed[i] !== 1) {
      if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
        res++
        flowerbed[i] = 1
      }
    }
  }
  return res >= n ? true : false
}

console.log(canPlaceFlowers([0, 0], 2))
