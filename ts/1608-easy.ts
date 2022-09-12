
/**
 * copy
 * @param nums 
 * @returns 
 */
function specialArray(nums: number[]): number {
  const n = nums.length
  nums.sort((a, b) => a - b)

  for (let x = 0; x < 1010; x++) {
    let l = 0, r = n - 1
    while (l < r) {
      const mid = l + r >> 1
      if (nums[mid] >= x) r = mid
      else l = mid + 1
    }
    if (nums[r] >= x && x == n - r) return x
  }
  return -1
};



specialArray([3, 6, 7, 7, 0])
specialArray([0, 4, 3, 0, 4])
specialArray([3, 5])
specialArray([0, 0])