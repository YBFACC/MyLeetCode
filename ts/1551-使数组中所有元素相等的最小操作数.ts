//1 3 5 7 9 11
//自己--类似462--找到中位数
function minOperations(n: number): number {
  let res = 0
  if ((n & 1) === 0) {
    const mid = (n >> 1) * 2
    for (let i = 0; i < (n >> 1); i++) {
      const curr = (2 * i) + 1
      res += mid - curr
    }

  } else {
    const mid = (n >> 1) * 2 + 1
    for (let i = 0; i < (n >> 1); i++) {
      const curr = (2 * i) + 1
      res += mid - curr
    }
  }

  return res
};
console.log(minOperations(3))
console.log(minOperations(6))