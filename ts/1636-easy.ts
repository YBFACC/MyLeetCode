
/**
 * copy--简单的模拟题
 * @param nums 
 * @returns 
 */
function frequencySort(nums: number[]): number[] {
  const map = new Map<number, number>()
  for (const x of nums) {
    if (!map.has(x)) map.set(x, 0)
    map.set(x, map.get(x) as number + 1)
  }
  nums.sort((a, b) => {
    return map.get(a) != map.get(b) ? map.get(a) as number - (map.get(b) as number) : b - a
  })
  return nums
};

frequencySort([2, 3, 1, 3, 2])