//自己--dp降维
function waysToStep(n: number): number {
  if (n === 1) return 1
  if (n === 2) return 2
  if (n === 3) return 4
  let dp_1 = 1
  let dp_2 = 2
  let dp_3 = 4
  for (let i = 4; i <= n; i++) {
    const temp = (dp_1 + dp_2 + dp_3) % 1000000007
    dp_1 = dp_2
    dp_2 = dp_3
    dp_3 = temp
  }
  return dp_3
}

console.log(waysToStep(76))