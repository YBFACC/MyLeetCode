
/**
 * 参考－－暴力，双重循环
 * 需要想通题意
 * @param s 
 * @returns 
 */
function beautySum(s: string): number {
  let res = 0
  const Len = s.length
  for (let i = 0; i < Len; i++) {
    const list = Array.from({ length: 26 }, () => 0)
    let maxNum = 0
    for (let j = i; j < Len; j++) {
      const index = s[j].charCodeAt(0) - 'a'.charCodeAt(0)
      list[index]++
      maxNum = Math.max(maxNum, list[index])

      let minNum = s.length;
      for (let k = 0; k < 26; k++) {
        if (list[k] > 0) {
          minNum = Math.min(minNum, list[k]);
        }
      }

      res += maxNum - minNum
    }
  }
  return res
};

beautySum("aabcb")