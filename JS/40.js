/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b)
  var res = []
  var n = candidates.length
  var temp = []
  var func = function(temp, target, start) {
    if (target < 0) {
      return
    } else if (target == 0) {
      res.push(temp)
      return
    }
    for (let i = start; i < n; i++) {
      temp.push(candidates[i])
      func(temp.slice(), target - candidates[i], i + 1)
      temp.pop()
    }
  }
  func(temp, target, 0)
  
  return res
}

var candidates = [10, 1, 2, 7, 6, 1, 5]
var target = 8
combinationSum2(candidates, target)
