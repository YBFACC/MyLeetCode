//自己--easy--可以使用摩尔投票法
function majorityElement(nums: number[]): number {
  let map = new Map()
  let limit = nums.length / 2
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 0)
    }
    const temp = map.get(nums[i]) + 1
    if (temp > limit) return nums[i]
    map.set(nums[i], temp)
  }
  return -1
}
