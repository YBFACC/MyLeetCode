
/**
 * 参考－－ｄｐ
 * https://leetcode.cn/problems/distinct-subsequences-ii/solution/bu-tong-by-capital-worker-vga3/
 * @param s 
 * @returns 
 */

function distinctSubseqII(s: string): number {
  const MOD = 1e9 + 7
  let res = 1
  const preConut = Array.from({ length: 26 }, () => 0)

  for (let i = 0; i < s.length; i++) {
    let newCount = res
    const chartCode = s[i].charCodeAt(0) - 'a'.charCodeAt(0)
    res = (res + newCount - preConut[chartCode] + MOD) % MOD
    preConut[chartCode] = newCount
  }
  //减去空集
  return res - 1
};

distinctSubseqII('abcd')