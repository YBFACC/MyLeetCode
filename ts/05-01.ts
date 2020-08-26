
//参考--二进制操作
function insertBits(N: number, M: number, i: number, j: number): number {
  let n = ~((-1 >>> (31 - j)) & (-1 << i))
  N &= n
  M <<= i

  return N | M
}

console.log(insertBits(1024, 19, 2, 6))
