//参考--排列组合
//涂了i个行和j个列
//i * n + j * n - i * j
function paintingPlan(n: number, k: number): number {
  if (n * n === k) return 1
  let res = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ((i * n + (n - i) * j) === k) {
        res += combination(n, i) * combination(n, j)
      }
    }
  }
  return res
};
//求组合
function combination(all: number, num: number): number {
  let temp = 1
  for (let i = all; i > all - num; i--) {
    temp *= i
  }
  for (let i = 1; i <= num; i++) {
    temp /= i
  }
  return temp
}

console.log(paintingPlan(2, 4))