
/**
 * 参考－－分段乘积相加
 * 统计从未出现的字符
 * @param s 
 * @returns 
 */
function uniqueLetterString(s: string): number {
  let res = 0
  const Len = s.length
  const left = new Array<number>(Len)
  const right = new Array<number>(Len)
  const cnts = new Array<number>(26).fill(-1)
  for (let i = 0; i < Len; i++) {
    const u = s.charCodeAt(i) - 65
    left[i] = cnts[u]
    cnts[u] = i
  }
  cnts.fill(Len)
  for (let i = Len - 1; i >= 0; i--) {
    const u = s.charCodeAt(i) - 65
    right[i] = cnts[u]
    cnts[u] = i
  }
  for (let i = 0; i < Len; i++) res += (i - left[i]) * (right[i] - i)

  return res
};
uniqueLetterString("LEETCODE")