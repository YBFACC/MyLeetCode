/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  var res = []
  var func = function(temp, curr, index) {
    let nums = temp.length
    if (nums > k || (k - nums) * 9 < n - curr) {
      return
    } else if (curr == n && nums == k) {
      res.push(temp.slice())
      return
    }
    for (let i = index; i < 10; i++) {
      temp.push(i)
      func(temp, curr + i, i + 1)
      temp.pop()
    }
  }
  func([], 0, 1)
  return res
}
combinationSum3(3, 7)
