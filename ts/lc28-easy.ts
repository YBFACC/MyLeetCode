//自己--二分

function purchasePlans(nums: number[], target: number): number {
  nums.sort((a, b) => a - b)
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    let right = nums.length - 1, left = i + 1
    while (left <= right) {
      const mid = left + ((right - left) >> 1)
      if (nums[mid] + nums[i] <= target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    count += right - i
  }
  return count % 1000000007
};

purchasePlans([2, 5, 3, 5], 6)
purchasePlans([2, 2, 1, 9], 10)