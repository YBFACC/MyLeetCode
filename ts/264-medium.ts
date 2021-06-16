
//自己--dp

function nthUglyNumber(n: number): number {
  const list = [1, 2, 3, 4, 5]
  let i2 = 2, i3 = 1, i5 = 1
  while (list.length < n) {
    let _2 = 2 * list[i2], _3 = 3 * list[i3], _5 = 5 * list[i5]
    while (list[list.length - 1] >= _2) {
      i2++
      _2 = 2 * list[i2]
    }
    while (list[list.length - 1] >= _3) {
      i3++
      _3 = 3 * list[i3]
    }
    while (list[list.length - 1] >= _5) {
      i5++
      _5 = 5 * list[i5]
    }
    const min = Math.min(_2, _3, _5)
    if (min % 2 === 0) {
      i2++
    } else if (min % 3 === 0) {
      i3++
    } else if (min % 5 === 0) {
      i5++
    }
    list.push(min)
  }
  return list[n - 1]
};
console.log(nthUglyNumber(10))