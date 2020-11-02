//参考--同余定理+前缀和
//遍历数组--0-i项的模是a，0-j项的模也是a
//求模相同的最短距离
function minSubarray(nums: number[], p: number): number {
  const Len = nums.length
  let sum = 0
  let mod = 0
  for (const num of nums) {
    sum += num
    mod = (mod + num) % p
  }
  if (mod === 0) return 0
  if (sum < p) return -1
  let s = 0,
    minLen = Number.MAX_SAFE_INTEGER
  const map = new Map()
  map.set(0, -1)
  for (let i = 0; i < Len; i++) {
    s = (s + nums[i]) % p
    const target = (s + p - mod) % p
    if (map.has(target)) {
      minLen = Math.min(minLen, i - map.get(target))
    }
    map.set((s + p) % p, i)
  }
  if (minLen >= nums.length) return -1
  return minLen >= map.size ? -1 : minLen
}
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