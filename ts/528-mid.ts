//参考--前缀和
//前缀和代表能命中的长度

class Solution {
  sum: number[]
  constructor(w: number[]) {
    const Len = w.length
    this.sum = Array.from({ length: Len + 1 }, () => 0)
    for (let i = 1; i <= Len; i++) {
      this.sum[i] = this.sum[i - 1] + w[i - 1]
    }
  }

  pickIndex(): number {
    const nums = this.sum
    const Len = nums.length,
      target = Math.trunc(Math.random() * nums[Len - 1]) + 1;
    let left = 0, right = Len - 1
    while (left <= right) {
      const mid = left + ((right - left) >> 1);
      if (nums[mid] == target) {
        right = mid - 1
      } else if (nums[mid] < target) {
        left = mid + 1
      } else if (nums[mid] > target) {
        right = mid - 1
      }
    }
    return right
  }
}