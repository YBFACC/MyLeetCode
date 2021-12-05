/*
 * @Author: yubingfeng
 * @Date: 2021-12-05 22:00:32
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-12-05 23:57:46
 * @Description: 参考--幂
 */

const MOD = 1337;
function superPow(a: number, b: number[]): number {
  return dfs(a, b, b.length - 1)
};

function dfs(a: number, b: number[], len: number): number {
  if (len === -1) return 1
  return qpow(dfs(a, b, len - 1), 10) * qpow(a, b[len]) % MOD
}

function qpow(a: number, b: number): number {
  let ans = 1
  a %= MOD
  while (b !== 0) {
    if ((b & 1) !== 0) ans = ans * a % MOD
    a = a * a % MOD
    b >>= 1
  }
  return ans
}