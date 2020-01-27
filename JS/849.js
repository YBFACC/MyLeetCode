/**
 * 自己---性能一般---按零分类
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  var res = 0
  var curr = 0
  var search_1 = 0
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] !== 0) {
      search_1++
      res = Math.max(res, Math.round(curr / search_1))
      curr = 0
      search_1 = 1
    } else if (i === seats.length - 1) {
      res = Math.max(res, Math.round(curr / search_1) + 1)
      curr = 0
      search_1 = 1
    } else {
      curr++
    }
  }
  return res
}
maxDistToClosest([0, 0, 0, 1])
