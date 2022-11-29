
/**
 * 提示－－只需要和０１０１或者１０１０比较就行
 * 不需要去想复杂的ｄｐ
 * @param s 
 * @returns 
 */

function minOperations(s: string): number {
  const Len = s.length, count = Math.floor(Len / 4) + 1
  const s1 = '0101', s2 = '1010'
  const str1 = s1.repeat(count), str2 = s2.repeat(count)
  let res1 = 0, res2 = 0
  for (let i = 0; i < Len; i++) {
    if (str1[i] !== s[i]) {
      res1++
    }
  }
  for (let i = 0; i < Len; i++) {
    if (str2[i] !== s[i]) {
      res2++
    }
  }
  return Math.min(res1, res2)
};

minOperations('1111')