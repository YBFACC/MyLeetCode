//自己--动态规划

function fib(n: number): number {
  if (n === 0) return 0
  if (n === 1) return 1
  let i = 0, j = 1

  for (let x = 2; x <= n; x++) {
    const temp = i + j
    i = j
    j = temp
    i %= 1000000007
    j %= 1000000007
  }
  return j
};