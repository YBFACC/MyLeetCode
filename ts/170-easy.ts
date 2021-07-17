//提示--双指针

class TwoSum {
  list: number[]
  constructor() {
    this.list = []
  }

  add(number: number): void {
    this.list.push(number)
  }

  find(value: number): boolean {
    const nums = this.list
    nums.sort((a, b) => a - b)
    const Len = nums.length
    let left = 0, right = Len - 1
    while (left < right) {
      const floor = nums[left] + nums[right]
      if (floor == value) {
        return true
      } else if (floor < value) {
        left++
      } else if (floor > value) {
        right--
      }
    }
    return false
  }
}
