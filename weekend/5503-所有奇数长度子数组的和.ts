//自己--傻傻的N^2
function sumOddLengthSubarrays(arr: number[]): number {
  let res = 0
  const Len = arr.length
  // const list = Array.from({ length: Len }, () => 0)
  // list[0] = arr[0]
  // for (let i = 1; i < Len; i++) {
  //   list[i] = list[i - 1] + arr[i]
  // }
  for (let i = 0; i < Len; i++) {
    let temp = arr[i]
    for (let j = i; j < Len; j++) {
      if ((j - i) % 2 === 0) {
        res += temp
      }
      temp += arr[j + 1]
    }
  }

  return res
};
sumOddLengthSubarrays([1, 4, 2, 5, 3])