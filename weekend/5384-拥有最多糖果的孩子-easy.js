/**
 * 双周赛--easy
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = Number.MIN_SAFE_INTEGER
  let res = []
  for (let i = 0; i < candies.length; i++) {
    max = Math.max(max, candies[i])
  }
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      res.push(true)
    } else {
      res.push(false)
    }
  }
  return res
}
kidsWithCandies([2, 3, 5, 1, 3], 3)
