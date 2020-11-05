//自己--统计每个数的1的个数-桶

function sortByBits(arr: number[]): number[] {
  const Bucket: number[][] = Array.from({ length: 33 }, () => [])
  const res: number[] = []
  for (const num of arr) {
    let index = count(num)
    Bucket[index].push(num)
  }
  for (let i = 0; i <= 32; i++) {
    if (Bucket[i].length === 0) continue
    Bucket[i].sort((a, b) => a - b)
    res.push(...Bucket[i])
  }
  return res
};

function count(num: number): number {
  let cnt = 0
  while (num !== 0) {
    if ((num & 1) === 1) {
      cnt++
    }
    num >>= 1
  }
  return cnt
}

sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1])