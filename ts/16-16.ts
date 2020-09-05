//自己--N^2--超时
function subSort(array: number[]): number[] {
  if (array.length < 2) return [-1, -1]
  let m = array.length
  let n = 0
  const Len = array.length

  for (let i = 0; i < Len; i++) {
    let min = array[i]
    let max = array[i]
    for (let j = i + 1; j < Len; j++) {
      const item = array[j]
      if (item < min) {
        m = Math.min(m, i)
      }
      if (item < max) {
        n = Math.max(n, j)
      }
      max = Math.max(max, item)
      min = Math.min(min, item)
    }
  }
  if (m === array.length && n === 0) {
    return [-1, -1]
  }
  return [m, n]
};

subSort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19])