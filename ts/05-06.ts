//自己--easy
function convertInteger(A: number, B: number): number {
  let count = 0
  let temp = A ^ B
  while (temp !== 0) {
    if (temp & 1) count++
    temp >>>= 1
  }
  return count
}
convertInteger(826966453, -729934991)
