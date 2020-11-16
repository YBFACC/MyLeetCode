//提示--二分法

function fixedPoint(A: number[]): number {
  let left = 0
  let right = A.length - 1
  let res = Infinity
  while (left <= right) {
    const mid = left + ((right - left) >> 1)
    if (A[mid] === mid) {
      res = Math.min(res, mid)
      right = mid - 1
      continue
    }
    if (A[mid] < mid) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return res === Infinity ? -1 : res
};
//4
console.log(fixedPoint([-10, -5, -2, 0, 4, 5, 6, 7, 8, 9, 10]))
//3
console.log(fixedPoint([-10, -5, 0, 3, 7]))