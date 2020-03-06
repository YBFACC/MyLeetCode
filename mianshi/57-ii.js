/**
 * 自己--暴力循环--性能一般
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  let res = []
  const func = function(start) {
    let sum = 0
    let temp = []
    while (sum <= target) {
      sum += start
      temp.push(start)
      if (sum === target) {
        res.push(temp)
        return
      }
      start++
    }
  }
  for (let i = 1; i < target / 2; i++) {
    func(i)
  }
  return res
}
findContinuousSequence(15)