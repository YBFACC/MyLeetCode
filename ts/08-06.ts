/**
 参考--递归永远的神
 */
function hanota(
  A: number[],
  B: number[],
  C: number[],
  n: number = A.length
): void {
  if (n === 1) {
    C.push(A.pop() as number)
    return
  } else {
    hanota(A, C, B, n - 1)//将n-1个A通过C移到B
    C.push(A.pop() as number)//将最大的A移动到C
    hanota(B, A, C, n - 1)//将B上到n-1通过A移到C
  }
}
let c: number[] = []
hanota([2, 1, 0], [], c)
console.log(c)
