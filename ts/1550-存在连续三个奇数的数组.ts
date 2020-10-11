//自己--easy
function threeConsecutiveOdds(arr: number[]): boolean {
  const Len = arr.length
  if (Len < 3) return false
  let res = false
  let a = arr[0] % 2 === 1
  let b = arr[1] % 2 === 1
  let c = arr[2] % 2 === 1
  if (a && b && c) {
    res = true
  }
  for (let i = 3; i < Len; i++) {
    if (a && b && c) {
      res = true
    }
    a = b
    b = c
    c = arr[i] % 2 === 1
  }

  if (a && b && c) {
    res = true
  }

  return res
};
threeConsecutiveOdds([102, 780, 919, 897, 901])