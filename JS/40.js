/**
 * 自己写的
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b)
  var res = []
  var n = candidates.length
  var temp = []
  var hash = {}
  var func = function(temp, target, start) {
    if (target < 0) {
      return
    } else if (target == 0) {
      res.push(temp)
      return
    }
    for (let i = start; i < n; i++) {
      if (!hash[i - 1] && candidates[i - 1] == candidates[i]) continue
      hash[i] = true
      temp.push(candidates[i])
      func(temp.slice(), target - candidates[i], i + 1)
      temp.pop()
      hash[i] = false
    }
  }
  func(temp, target, 0)

  return res
}

var candidates = [10, 1, 2, 7, 6, 1, 5]
var target = 8
combinationSum2(candidates, target)


/**
 * 双剪枝效率比我自己写的高
 * @param {*} candidates 
 * @param {*} target 
 */
var combinationSum2 = function(candidates, target) {
  var n = candidates.length
  var res = []
  var tmpPath = []
  candidates = candidates.sort((a, b) => a - b)
  var backtrack = function(tmpPath, target, start) {
    if (target == 0) {
      res.push(tmpPath)
      return
    }
    for (let i = start; i < n; i++) {
      if (target < candidates[i]) break
      if (i > start && candidates[i - 1] == candidates[i]) continue
      tmpPath.push(candidates[i])
      backtrack(tmpPath.slice(), target - candidates[i], i + 1)
      tmpPath.pop()
    }
  }
  backtrack(tmpPath, target, 0)
  return res
}
