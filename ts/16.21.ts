//自己--排序
function findSwapValues(array1: number[], array2: number[]): number[] {
  array1.sort((a, b) => a - b)
  array2.sort((a, b) => a - b)
  const sum1 = array1.reduce((pre, curr) => pre + curr, 0)
  const sum2 = array2.reduce((pre, curr) => pre + curr, 0)
  if (sum1 === sum2) return []
  let i1 = 0
  let i2 = 0

  while (i1 < array1.length && i2 < array2.length) {
    if (array1[i1] === array2[i2]) {
      i1++
      i2++
      continue
    }
    //sum1 + array1[i1] - array2[i2]===sum2 + array2[i2] - array1[i1]
    const _sum1 = sum1 - 2 * array1[i1]
    const _sum2 = sum2 - 2 * array2[i2]
    if (_sum1 === _sum2) {
      return [array1[i1], array2[i2]]
    }
    if (_sum1 > _sum2) {
      i1++
    } else {
      i2++
    }
    // const _sum1 = sum1 + 2 * array2[i2]
    // const _sum2 = sum2 + 2 * array1[i1]
    // if (_sum1 === _sum2) {
    //   return [array1[i1], array2[i2]]
    // }
    // if (_sum1 > _sum2) {
    //   i1++
    // } else {
    //   i2++
    // }
  }

  return []
}

//[4718,78]
console.log(
  findSwapValues(
    [519, 886, 282, 382, 662, 4718, 258, 719, 494, 795],
    [52, 20, 78, 50, 38, 96, 81, 20]
  )
)
//[1,3]
console.log(findSwapValues([4, 1, 2, 1, 1, 2], [3, 6, 3, 3]))
