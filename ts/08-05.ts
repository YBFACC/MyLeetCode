//看提示--二分
function multiply(A: number, B: number): number {
  if (A === 1) return B
  if (B === 1) return A
  if (A % 2 === 1) {
    return multiply(B, A - 1) + B
  } else {
    const temp = multiply(B, (A) >> 1)
    return temp + temp
  }
};

console.log(multiply(3, 6))