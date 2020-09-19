//自己--超时
function minSubarray(nums: number[], p: number): number {
  const Len = nums.length
  const list = Array.from({ length: Len + 1 }, () => 0)
  for (let i = 1; i <= Len; i++) {
    list[i] = list[i - 1] + nums[i - 1]
  }
  let res = Len + 2
  let all = list[Len]
  if (all < p) return -1
  if (all % p === 0) { return 0 }
  for (let i = 0; i <= Len; i++) {
    for (let j = i; j <= Len; j++) {
      const dic = j - i
      const temp = list[j] - list[i]
      if (all - temp > 0 && (all - temp) % p === 0) {
        res = Math.min(res, dic)
      }
    }
  }
  return res === Len + 2 ? -1 : res
};
//-1
console.log(minSubarray([4, 4, 2], 7))
//-1
console.log(minSubarray([1, 2, 3], 7))
//1
console.log(minSubarray([3, 1, 4, 2], 6))
//2
console.log(minSubarray([6, 3, 5, 2], 9))
//0
console.log(minSubarray([1, 2, 3], 3))
//0
console.log(minSubarray([1000000000, 1000000000, 1000000000], 3))