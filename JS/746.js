/**
 * 自己---递归超时
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  var len = cost.length
  var min = Number.MAX_VALUE
  var func = function(index, curr) {
    if (index >= len) {
      min = Math.min(min, curr)
      return
    }
    func(index + 1, typeof cost[index] === 'number' ? curr + cost[index] : curr)
    func(index + 2, typeof cost[index] === 'number' ? curr + cost[index] : curr)
  }
  func(-1, 0)
  return min
}

/**
 * 参考---动态规划---性能棒
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  var f1 = 0,
    f2 = 0
  for (let i = cost.length-1; i >= 0; i--) {
    let f0=cost[i]+Math.min(f1,f2)
    f2=f1
    f1=f0
  }
  return Math.min(f1,f2)
}

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));

