//自己--用2进制表示小数
function printBin(num: number): string {
  if (num > 1 || num <= 0) return 'ERROR'
  let res = '0.'
  let temp = 0.5
  let index = 1
  while (index < 32) {
    if (num >= temp) {
      res += 1
      num -= temp
    } else {
      res += 0
    }
    if (num === 0) break
    temp /= 2
    index++
  }
  if (num !== 0) return 'ERROR'
  return res
}

console.log(printBin(0.1))
