//自己--mnlogm--枚举第一行+二分

function smallestCommonElement(mat: number[][]): number {
  const first = mat[0]

  for (const target of first) {
    let i = 1
    for (; i < mat.length; i++) {
      const list = mat[i]
      let left = 0
      let right = list.length - 1
      let mid!: number
      while (left <= right) {
        mid = left + ((right - left) >> 1)
        if (list[mid] === target) break
        else if (list[mid] < target) {
          left = mid + 1
        }
        else if (list[mid] > target) {
          right = mid - 1
        }
      }
      if (list[mid] !== target) break
    }
    if (i === mat.length)
      return target
  }

  return -1
};
console.log(
  smallestCommonElement(
    [
      [1, 2, 3, 4, 5],
      [2, 4, 5, 8, 10],
      [3, 5, 7, 9, 11],
      [1, 3, 5, 7, 9]
    ]
  ))