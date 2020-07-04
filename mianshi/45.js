/**
 * 自己--做过--A+B>B+A?1:0
 * 8878和887比较
 * 8878+887=8878887
 * 887+8878=8878878
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  if (nums.length === 0) return ''
  nums.sort((a, b) => {
    let A_B = a + '' + b
    let B_A = b + '' + a
    let index = 0
    while (index < A_B.length) {
      if (~~A_B[index] > ~~B_A[index]) {
        return 1
      }
      if (~~A_B[index] < ~~B_A[index]) {
        return -1
      }
      index++
    }
    return 0
  })

  return nums.join('')
}

console.log(minNumber([824, 938, 1399, 5607, 6973, 5703, 9609, 4398, 8247]))
