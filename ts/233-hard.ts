//参考自己--找规律
//对每层递归

function countDigitOne(n: number): number {
  if (n <= 0) return 0
  if (n < 10) return 1
  const str = n + ''
  const Len = str.length
  const high = +str[0], lowwer = n - high * Math.pow(10, Len - 1)


  const first = high === 1 ? (lowwer + 1) : Math.pow(10, Len - 1)
  const second = high * (Len - 1) * Math.pow(10, Len - 2)

  return countDigitOne(lowwer) + first + second
};