//copy--巧妙的记录长度
//连续遇到2个0，重置长度，只遇到一个0，减去上一个被0分开的序列
function reverseBits(num: number): number {
  let res = 0
  let bits = 32
  let preLen = 0
  let curLen = 0
  while (bits-- > 0) {
    if ((num & 1) === 0) {
      curLen -= preLen
      preLen = curLen + 1
    }
    curLen++
    res = Math.max(res, curLen)
    num >>= 1
  }

  return res
};
console.log(reverseBits(parseInt('111111011100111', 2)))