//自己--前缀和
//我写的O(n^2)时间复杂度的
//可以统计数字在奇数中出现的次数O(n)

function sumOddLengthSubarrays(arr: number[]): number {
  let res = 0
  const list = [0]
  const Len = arr.length
  for (let i = 0; i < Len; i++) {
    list[i + 1] = list[i] + arr[i]
  }
  for (let i = 1; i <= Len; i++) {
    for (let j = 0; j < i; j++) {
      if ((i - j) % 2 === 1) {
        res += list[i] - list[j]
      }
    }
  }
  return res
};
sumOddLengthSubarrays([10, 11, 12])