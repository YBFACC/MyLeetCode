//参考--O(N)-正反2次遍历
function subSort(array: number[]): number[] {
  if (array.length < 2) return [-1, -1]
  let m = array.length
  let n = 0
  const Len = array.length
  let max = array[0]
  let min = array[array.length - 1]
  for (let i = 0; i < array.length; i++) {
    if (max > array[i]) {
      n = Math.max(n, i)
    }
    max = Math.max(max, array[i])
  }
  for (let i = Len - 1; i >= 0; i--) {
    if (min < array[i]) {
      m = Math.min(m, i)
    }
    min = Math.min(min, array[i])
  }
  if (m === array.length && n === 0) {
    return [-1, -1]
  }
  return [m, n]
};

console.log(subSort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]))