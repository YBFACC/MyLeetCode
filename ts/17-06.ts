
//参考--类似求1的个数--递归累加
function numberOf2sInRange(n: number): number {
  if (n < 2) return 0
  if (n < 12) return 1
  if (n < 20) return 2
  let str = n + ''
  let first = +str[0]
  let tail = parseInt(str.slice(1), 10)
  let power = 10 ** (str.length - 1)
  if (first === 1) {
    return numberOf2sInRange(power - 1) + numberOf2sInRange(tail)
  } else if (first === 2) {
    return numberOf2sInRange(2 * power - 1) + numberOf2sInRange(tail) + tail + 1
  } else {
    return (
      power + first * numberOf2sInRange(power - 1) + numberOf2sInRange(tail)
    )
  }
}

console.log(numberOf2sInRange(320))
