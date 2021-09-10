//自己--前缀和
//取余--过滤循环

function chalkReplacer(chalk: number[], k: number): number {
  let sum = chalk.reduce((pre, curr) => curr + pre, 0)
  k %= sum
  const Len = chalk.length
  for (let i = 0; i < Len; i++) {
    if (k < chalk[i]) {
      return i
    }
    k -= chalk[i]
  }
  return -1
};

console.log(chalkReplacer([5, 1, 5], 22))