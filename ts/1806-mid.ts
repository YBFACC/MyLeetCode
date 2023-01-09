
/**
 * 自己－－模拟，可用数学
 * @param n 
 * @returns 
 */
function reinitializePermutation(n: number): number {
  let index = 1
  let list = Array.from({ length: n }, (v, k) => k)
  let res = list.join(',')
  while (true) {
    const temp: number[] = []
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        temp[i] = list[i >> 1]
      } else {
        temp[i] = list[(n >> 1) + ((i - 1) >> 1)]
      }
    }
    const floor = temp.join(',')
    if (floor === res) return index
    list = temp
    index++
  }
};


let a = reinitializePermutation(6)
