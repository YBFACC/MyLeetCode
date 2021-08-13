//自己--dp

function nthSuperUglyNumber(n: number, primes: number[]): number {
  const index = Array.from({ length: primes.length }, () => 0)
  const dp = [1]
  for (let i = 1; i < n; i++) {
    let min = Infinity, _i = -1
    for (let j = 0; j < primes.length; j++) {
      while (primes[j] * dp[index[j]] <= dp[dp.length - 1]) {
        index[j]++
      }
      const floor = primes[j] * dp[index[j]]
      if (floor < min) {
        min = Math.min(min, floor)
        _i = j
      }
    }
    dp.push(min)
    index[_i]++
  }
  return dp[n - 1]
};
nthSuperUglyNumber(1, [2, 3, 5])

nthSuperUglyNumber(12, [2, 7, 13, 19])