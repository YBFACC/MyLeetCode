/**
 * 参考--数学解法
 * x+y=a
 * x^2+y^2=b
 * 1到N--求和--求平方和
 * @param {number[]} nums
 * @return {number[]}
 */
var missingTwo = function (nums) {
  const N = nums.length + 2
  let sum = 0
  let square = 0
  for (const num of nums) {
    sum += num
    square += num ** 2
  }
  let all_sum = ((1 + N) / 2) * N
  let all_square = (N * (N + 1) * (2 * N + 1)) / 6

  let two_sum = all_sum - sum
  let two_square = all_square - square

  let b =
    (two_sum + Math.sqrt(two_sum ** 2 - 2 * (two_sum ** 2 - two_square))) / 2
  let a = two_sum - b
  return [a, b]
}

console.log(missingTwo([2, 3]))
