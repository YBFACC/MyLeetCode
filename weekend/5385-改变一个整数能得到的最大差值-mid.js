/**
 * 双周赛--最大值减最小值
 * @param {number} num
 * @return {number}
 */
var maxDiff = function (num) {
  number = num.toString()

  const min = function (index) {
    if (index >= number.length) return 0
    if (index === 0 && number[index] !== '1') {
      return number[index]
    }
    if (index > 0 && number[index] > 0 && number[index] !== number[0]) {
      return number[index]
    }
    return min(index + 1)
  }
  let MIN = min(0)
  const max = function (index) {
    if (index >= number.length) return 9
    if (number[index] !== '9') {
      return number[index]
    }

    return max(index + 1)
  }
  let MAX = max(0)
  let num_min
  let num_max = number.replace(new RegExp(`${MAX}`, 'g'), '9')
  if (MIN === number[0]) {
    num_min = number.replace(new RegExp(`${MIN}`, 'g'), '1')
  } else {
    num_min = number.replace(new RegExp(`${MIN}`, 'g'), '0')
  }
  return parseInt(num_max, 10) - parseInt(num_min, 10)
}
console.log(maxDiff(1101057))
