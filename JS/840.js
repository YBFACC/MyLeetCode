/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  var res = 0
  var r = grid.length
  var c = grid[0].length
  if (r < 3 || c < 3) return 0
  for (var m = 0; m < r - 2; m++) {
    for (var n = 0; n < c - 2; n++) {
      var arr = []
      var arr1 = []
      var arr2 = []
      var arr3 = []
      arr1.push(grid[m][n], grid[m][n + 1], grid[m][n + 2])
      arr2.push(grid[m + 1][n], grid[m + 1][n + 1], grid[m + 1][n + 2])
      arr3.push(grid[m + 2][n], grid[m + 2][n + 1], grid[m + 2][n + 2])
      if (
        arr1.some(val => val < 1 || val > 9) ||
        arr2.some(val => val < 1 || val > 9) ||
        arr3.some(val => val < 1 || val > 9)
      ) {
        continue
      }
      var tempArr = arr1.concat(arr2).concat(arr3)
      if (new Set(tempArr).size !== 9) {
        continue
      }
      arr.push(arr1, arr2, arr3)
      if (isMq(arr)) res++
    }
  }
  return res
  function isMq(arr) {
    //row
    if (arr[0][0] + arr[0][1] + arr[0][2] !== 15) return false
    if (arr[1][0] + arr[1][1] + arr[1][2] !== 15) return false
    if (arr[2][0] + arr[2][1] + arr[2][2] !== 15) return false
    //column
    if (arr[0][0] + arr[1][0] + arr[2][0] !== 15) return false
    if (arr[0][1] + arr[1][1] + arr[2][1] !== 15) return false
    if (arr[0][2] + arr[1][2] + arr[2][2] !== 15) return false
    //magic square
    if (arr[0][0] + arr[1][1] + arr[2][2] !== 15) return false
    if (arr[2][0] + arr[1][1] + arr[0][2] !== 15) return false
    console.log(arr)
    return true
  }
}
