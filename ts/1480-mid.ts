//自己--前缀和

function runningSum(nums: number[]): number[] {
  const res = []
  let sum = 0
  for (const item of nums) {
    sum += item
    res.push(sum)
  }
  return res
};