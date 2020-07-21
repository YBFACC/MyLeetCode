/**
 * 参考--二分
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    let mid = left + ((right - left) >>> 1)
    if (numbers[mid] > numbers[right]) {
      left = mid + 1
    } else if (numbers[mid] < numbers[right]) {
      right = mid
    } else {
      right--
    }
  }
  return numbers[left]
}

console.log(minArray([4, 7, 8, 9, 1, 2, 3, 4]))
