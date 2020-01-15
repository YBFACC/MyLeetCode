/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  var n = candidates.length
  var res = []
  var temp = []
  var func = function(temp, target, start) {
    if (target < 0) {
      return
    } else if (0 == target) {
      res.push(temp)
      return
    }
    for (let i = start; i < n; i++) {
      temp.push(candidates[i])
      func(temp.slice(), target - candidates[i], i)
      temp.pop()
    }
  }
  func(temp, target, 0)
  return res
}

var candidates = [2, 3, 6, 7]
var target = 7
new combinationSum(candidates, target)
