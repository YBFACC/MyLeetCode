//参考--高端位运算
function exchangeBits(num: number): number {
  return ((num & 0xaaaaaaaa) >>> 1) | ((num & 0x55555555) << 1)
}

console.log(exchangeBits(10))
